import * as React from 'react'
import { useRef } from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

interface CategoriesProps {
  category: string[]
}

const Categories = ({ category }: CategoriesProps) => {
  const ref = useRef()
  return (
    <>
      <div className="flex flex-row flex-wrap items-start gap-2">
        {group.map(category => (
          <>
            <Link
              ref={ref}
              key={category}
              to={`/categories/${kebabCase(category.fieldValue)}/`}
              className="inline-block rounded-lg bg-slate-300 px-2 py-1 text-xs font-medium uppercase tracking-tight text-gray-900 no-underline shadow-sm shadow-slate-500/50 transition delay-150 ease-in-out hover:bg-slate-300 hover:shadow-slate-700/50 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              {category.fieldValue}
            </Link>
            <span aria-label="Category Count">{category.totalCount}</span>
          </>
        ))}
      </div>
    </>
  )
}
export default Categories
