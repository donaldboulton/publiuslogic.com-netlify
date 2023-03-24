import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { debounce } from '../../utils/debounce'
import ReactionsWidget from './ReactionsWidget'

const initialReactionsCount = {
  like: 0,
  insightful: 0,
  curious: 0,
}

const reactions = [
  { label: 'like', node: <span role="img">👍</span> },
  { label: 'insightful', node: <span role="img">💡</span> },
  { label: 'curious', node: <span role="img">🤔</span> },
]

const Reactions = ({ slug }) => {
  const lsKey = `reactions:${slug}`
  const [reactionsCount, setReactionsCount] = useState(initialReactionsCount)
  const [userReactions, setUserReactions] = useState({})

  useEffect(() => {
    axios
      .get(`${process.env.API_URL || ''}/api/reactions?slug=${slug}`)
      .then(function ({ data }) {
        setReactionsCount({ ...reactionsCount, ...data })
        getUserReactions()
      })
      .catch(function () {
        // todo: log to Sentry
      })
  }, [slug])

  function updateReactionCount(reaction) {
    const count = parseInt(reactionsCount[reaction], 10)
    setReactionsCount({ ...reactionsCount, ...{ [reaction]: count + 1 } })
  }

  function getUserReactions() {
    const ur = JSON.parse(localStorage.getItem(lsKey)) || {}
    setUserReactions({ ...userReactions, ...ur })
  }

  function storeUserReactions(reaction) {
    const ur = { ...userReactions, ...{ [reaction]: reaction } }
    localStorage.setItem(lsKey, JSON.stringify(ur))
    setUserReactions(ur)
  }

  function reactionOnSelect(reaction) {
    // Optimistic UI update
    updateReactionCount(reaction)

    axios
      .post(`${process.env.API_URL || ''}/api/react`, {
        slug,
        reaction,
      })
      .then(function () {
        updateReactionCount(reaction)
        storeUserReactions(reaction)
      })
      .catch(function () {
        // todo: log to Sentry
      })
  }

  return (
    <div>
      <ReactionsWidget
        reactions={reactions}
        reactionsCount={reactionsCount}
        userReactions={userReactions}
        onSelect={debounce(reactionOnSelect, 500)}
      />
    </div>
  )
}

export default Reactions
