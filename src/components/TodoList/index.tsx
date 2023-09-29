'use client'

import { Session } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'
import { Database } from '../../lib/database.types'
import { supabase } from '../../lib/supabase'

type Todos = Database['public']['Tables']['todos']['Row']

export default function TodoList({ session }: { session: Session }) {
  const [todos, setTodos] = useState<Todos[]>([])
  const [newTaskText, setNewTaskText] = useState('')
  const [errorText, setErrorText] = useState('')

  const user = session.user

  useEffect(() => {
    const fetchTodos = async () => {
      const { data: todos, error } = await supabase.from('todos').select('*').order('id', { ascending: true })

      if (error) console.log('error', error)
      else setTodos(todos)
    }

    fetchTodos()
  }, [supabase])

  const addTodo = async (taskText: string) => {
    let task = taskText.trim()
    if (task.length) {
      const { data: todo, error } = await supabase.from('todos').insert({ task, user_id: user.id }).select().single()

      if (error) {
        setErrorText(error.message)
      } else {
        setTodos([...todos, todo])
        setNewTaskText('')
      }
    }
  }

  const deleteTodo = async (id: number) => {
    try {
      await supabase.from('todos').delete().eq('id', id).throwOnError()
      setTodos(todos.filter(x => x.id != id))
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className="w-full">
      <h1 className="mb-12">Title</h1>
      <form
        onSubmit={e => {
          e.preventDefault()
          addTodo(newTaskText)
        }}
        className="my-2 flex gap-2"
      >
        <input
          className="w-full rounded bg-slate-900 p-2 text-slate-200"
          type="text"
          placeholder="new songs"
          value={newTaskText}
          onChange={e => {
            setErrorText('')
            setNewTaskText(e.target.value)
          }}
        />
        <button className="btn-black" type="submit">
          Add
        </button>
      </form>
      {!!errorText && <Alert text={errorText} />}
      <div className="overflow-hidden rounded-md bg-slate-900 text-slate-300 shadow">
        <ul>
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} onDelete={() => deleteTodo(todo.id)} />
          ))}
        </ul>
      </div>
    </div>
  )
}

const Todo = ({ todo, onDelete }: { todo: Todos; onDelete: () => void }) => {
  const supabase = useSupabaseClient<Database>()
  const [isCompleted, setIsCompleted] = useState(todo.is_complete)

  const toggle = async () => {
    try {
      const { data } = await supabase
        .from('todos')
        .update({ is_complete: !isCompleted })
        .eq('id', todo.id)
        .throwOnError()
        .select()
        .single()

      if (data) setIsCompleted(data.is_complete)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <li className="block w-full cursor-pointer transition duration-150 ease-in-out hover:bg-slate-800 focus:bg-slate-800 focus:outline-none">
      <div className="flex items-center px-4 py-4 sm:px-6">
        <div className="flex min-w-0 flex-1 items-center">
          <div className="truncate text-sm font-medium leading-5">{todo.task}</div>
        </div>
        <div>
          <input
            className="ml-1 h-6 w-6 cursor-pointer rounded border-blue-400 bg-blue-200 ring-offset-blue-400 focus:ring-2 focus:ring-blue-400"
            onChange={e => toggle()}
            type="checkbox"
            checked={isCompleted ? true : false}
          />
        </div>
        <button
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            onDelete()
          }}
          className="hover:border-black ml-2 h-4 w-4 rounded border-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="gray">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </li>
  )
}

const Alert = ({ text }: { text: string }) => (
  <div className="my-3 rounded-md bg-red-100 p-4">
    <div className="text-sm leading-5 text-red-700">{text}</div>
  </div>
)
