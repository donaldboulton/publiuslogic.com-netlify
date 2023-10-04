import * as React from 'react'

const Right = ({ children, ...delegated }) => {
    return (
        <>
            <div className="justify-right flex items-stretch" {...delegated}>
                {children}
            </div>
        </>
    )
}

export default Right
