import * as React from 'react'

const Title = props => {
  const { text, children, className } = props
  return (
    <div
      className={className}
      style={{
        backgroundColor: '#0f172a',
        color: 'white',
        paddingLeft: '20px',
        paddingTop: '8px',
        paddingRight: '0px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: '1px',
        borderBottomColor: 'purple',
      }}
    >
      <div
        style={{
          fontSize: [2, 3],
          fontFamily: 'heading',
          lineHeight: 'heading',
          margin: '0',
          color: '#FF79C6',
        }}
      >
        {text}
      </div>
      <div
        className="gatsby-highlight"
        style={{
          bg: 'highlight',
          background: 'highlight',
          padding: '4px 6px',
          color: 'white',
          borderRadius: '5px 0px 0px 5px',
        }}
      >
        {children}
      </div>
    </div>
  )
}
export default Title
