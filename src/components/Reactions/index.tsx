import * as React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { debounce } from '../../utils/debounce'
import ReactionsWidget from './ReactionsWidget'
import Section from '@/components/Section'

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

const Reactions = ({ id }) => {
  const lsKey = `reactions:${id}`
  const [reactionsCount, setReactionsCount] = useState(initialReactionsCount)
  const [userReactions, setUserReactions] = useState({})

  useEffect(() => {
    axios
      .get(`${process.env.API_URL || ''}/api/reactions?id=${id}`)
      .then(function ({ data }) {
        setReactionsCount({ ...reactionsCount, ...data })
        getUserReactions()
      })
      .catch(function () {
        // todo: log to Sentry
      })
  }, [id])

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
        id,
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
    <Section>
      <div>
        <ReactionsWidget
          reactions={reactions}
          reactionsCount={reactionsCount}
          userReactions={userReactions}
          onSelect={debounce(reactionOnSelect, 500)}
        />
      </div>
    </Section>
  )
}

export default Reactions
