import * as React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'

export default connectSearchBox(({ refine, currentRefinement, onFocus, ...rest }) => (
  <form className="group relative">
    <svg
      width="20"
      height="20"
      fill="currentColor"
      className="absolute left-3 top-1/2 -mt-2.5 text-gray-400 pointer-events-none group-focus-within:text-purple-500"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      />
    </svg>
    <input
      className="focus:ring-2 focus:ring-purple-500 focus:outline-none w-full text-sm leading-6 bg-slate-300 dark:bg-slate-800 text-slate-900 dark:text-slate-200 placeholder-gray-400 rounded-md py-2 pl-10 ring-1 ring-purple-500 shadow-sm"
      type="text"
      aria-label="Search Posts"
      placeholder="Search posts..."
      onChange={e => refine(e.target.value)}
      onMouseLeave={e => e.target.blur()}
      value={currentRefinement}
      onFocus={onFocus}
      {...rest}
    />
  </form>
))
