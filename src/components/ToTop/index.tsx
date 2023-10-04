'use client'

import * as React from 'react'
import { useState, useEffect } from 'react'
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline'

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 1400) {
                setShowTopBtn(true)
            } else {
                setShowTopBtn(false)
            }
        })
    }, [])
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <div className="relative">
            {' '}
            {showTopBtn && (
                <ArrowUpCircleIcon
                    className="scroll bottom-9 right-8 z-20 h-9 w-9 text-slate-900 dark:text-slate-400 md:right-3"
                    onClick={goToTop}
                />
            )}{' '}
        </div>
    )
}
export default ScrollToTop
