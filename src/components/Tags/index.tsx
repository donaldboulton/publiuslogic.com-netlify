import * as React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

const Tags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-row flex-wrap items-start gap-2">
    {tags.map(tag => (
      <Link
        key={tag}
        to={`/tags/${kebabCase(tag)}/`}
        className="inline-block rounded bg-slate-300 px-2 py-1 text-xs font-medium uppercase tracking-tight text-gray-900 no-underline shadow-sm shadow-slate-500/50 transition delay-150 ease-in-out hover:bg-slate-300 hover:shadow-slate-700/50 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"        
      >
        {tag}
      </Link>
    ))}
  </div>
)

export default Tags
