import * as React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

const Tags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-row flex-wrap items-start gap-2 text-slate-100">
    {tags.map(tag => (
      <Link
        to={`/tags/${kebabCase(tag)}/`}
        className="inline-block py-1 px-3 rounded no-underline bg-slate-300 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 transition ease-in-out delay-150 shadow-sm shadow-slate-500/50 hover:shadow-slate-700/50 text-slate-900 dark:text-slate-100 text-xs font-medium tracking-tight uppercase"
        key={tag}
      >
        {tag}
      </Link>
    ))}
  </div>
)
export default Tags
