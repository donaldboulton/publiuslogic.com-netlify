import * as React from 'react'
import { FC } from 'react'
import Columns from './columns'

interface SpreadsheetsRowProps {
  idx: number
  state: any
  handleChange: func
}

const SpreadsheetsRow: FC<CSpreadsheetsRowProps> = props => {
  const { idx, state, handleChange } = props
  const nameId = `${Columns.name}${idx}`
  const snackId = `${Columns.snack}${idx}`
  const drinkId = `${Columns.drink}${idx}`
  return (
    <div key={`row-${idx}`} className="w-full">
      <span>
        <label htmlFor={nameId} className="block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          name={nameId}
          data-idx={idx}
          id={nameId}
          className="mt-2 bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:ring-slate-500 focus:border-fuchsia-500 shadow-sm sm:text-sm border-slate-800 rounded-md"
          placeholder="Email"
          required
          value={state.name}
          onChange={handleChange}
          aria-label="Name"
        />
      </span>
      <span>
        <label htmlFor={snackId} className="block text-sm font-medium">
          Snack
        </label>
        <input
          type="text"
          name={snackId}
          data-idx={idx}
          id={snackId}
          className="mt-2 bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:ring-slate-500 focus:border-fuchsia-500 shadow-sm sm:text-sm border-slate-800 rounded-md"
          value={state.snack}
          onChange={handleChange}
          placeholder="Snacks"
          aria-label="Snacks"
          required
        />
      </span>
      <span>
        <label htmlFor={drinkId} className="block text-sm font-medium">
          Snack
        </label>
        <input
          type="text"
          name={drinkId}
          data-idx={idx}
          id={drinkId}
          className="mt-2 bg-slate-300 dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:ring-slate-500 focus:border-fuchsia-500 shadow-sm sm:text-sm border-slate-800 rounded-md"
          value={state.drink}
          onChange={handleChange}
          placeholder="Drink"
          required
          aria-label="Name"
        />
      </span>
    </div>
  )
}

export default SpreadsheetsRow
