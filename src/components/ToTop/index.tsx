'use client'

import * as React from 'react'
import { useState, useEffect } from "react";
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline'

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 2400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="relative">
            {" "}
            {showTopBtn && (
                <ArrowUpCircleIcon
                    className="scroll h-9 w-9 right-8 bottom-9 z-20 md:right-3 text-slate-900 dark:text-slate-400"
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    );
};
export default ScrollToTop;