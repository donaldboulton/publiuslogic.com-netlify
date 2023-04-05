import * as React from 'react'
import { useState, useEffect } from 'react'

const ReactionsWidgetItem = ({ reaction, reactionsCount, userReactions, onSelect }) => {
  const [isHovered, setHovered] = useState(false)
  const [isSelected, setSelected] = useState('')
  const selectedLabel = userReactions[reaction.label]

  useEffect(() => {
    setSelected(selectedLabel)
  }, [selectedLabel])

  const handleClick = () => {
    if (isSelected) return
    setSelected(true)
    onSelect && onSelect(reaction.label)
  }

  return (
    <ul className="list-none">
      <li className="p-2">
        <div className="flex flex-col items-center">
          <div
            className={`text-disabled-on-surface-0 mb-1 transform text-xs capitalize transition duration-300 ease-in-out ${
              isHovered || isSelected ? `hover:opacity-100` : '-translate-y-4 opacity-0'
            }`}
          >
            {reaction.label}
          </div>
          <div
            className={`${
              isSelected
                ? `-translate-y-1 scale-125 cursor-default`
                : `cursor-pointer hover:-translate-y-1 hover:scale-125`
            } transform transition duration-100 ease-in-out`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleClick}
          >
            {reaction.node}
          </div>
          <div className="text-xs">{reactionsCount[reaction.label]}</div>
        </div>
      </li>
    </ul>
  )
}

export default ReactionsWidgetItem
