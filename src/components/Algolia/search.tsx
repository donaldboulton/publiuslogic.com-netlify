'use client'

import * as React from 'react'
import { useState, useMemo } from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'
import SearchBox from './search-box'
import SearchResult from './search-result'

function Search({ indices }) {
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  const searchClient = useMemo(
    () => algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY),
    []
  )

  return (
    <div>
      <div>
        <InstantSearch
          searchClient={searchClient}
          indexName={indices[0].name}
          onSearchStateChange={({ query }) => setQuery(query)}
        >
          <SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
          <SearchResult show={query && query.length > 0 && hasFocus} indices={indices} />
        </InstantSearch>
      </div>
    </div>
  )
}

export default Search
