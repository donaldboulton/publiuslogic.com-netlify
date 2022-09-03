import { Link } from 'gatsby'
import * as React from 'react'

import { connectStateResults, Highlight, Hits, Index, Snippet, PoweredBy } from 'react-instantsearch-dom'

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits

  return hitCount > 0 ? (
    <div className="HitCount ml-3">
      <div className="text-slate-900 dark:text-slate-200 mt-3 mb-2">Search Posts Listed Below</div>
      {hitCount} result{hitCount !== 1 ? 's' : ''}
    </div>
  ) : null
})

const PageHit = ({ hit }) => (
  <div>
    <Link to={hit.path}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
)

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits className="Hits" hitComponent={PageHit} />
  </Index>
)

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map(index => (
      <HitsInIndex index={index} key={index.name} />
    ))}
    <PoweredBy className="text-slate-200 rounded-md mr-5 p-2 bg-purple-600" />
  </div>
)

export default SearchResult
