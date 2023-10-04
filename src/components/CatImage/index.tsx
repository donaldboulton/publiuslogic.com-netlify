'use client'

import * as React from 'react'
import { useEffect, useState } from 'react'

const CatImage = () => {
    const [imageUrl, setImageUrl] = useState()
    useEffect(() => {
        fetch('https://aws.random.cat/meow')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setImageUrl(data.file)
            })
    }, [])

    return (
        <div>
            {imageUrl && (
                <img src={imageUrl} alt="Random Cat" className="w-80" />
            )}
        </div>
    )
}

export default CatImage
