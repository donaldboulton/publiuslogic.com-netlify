'use client'

import * as React from 'react'
import { useState, useEffect } from "react";
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'

const ScrollToBottom = () => {
    const [showBottomBtn, setShowBottomBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1000) {
                setShowBottomBtn(true);
            } else {
                setShowBottomBtn(false);
            }
        });
    }, []);
    const goToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };
    return (
        <div className="relative">
            {" "}
            {showBottomBtn && (
                <ArrowDownCircleIcon
                    className="scroll-down h-9 w-9 right-8 top-20 z-20 md:right-3 text-slate-900 dark:text-slate-400"
                    onClick={goToBottom}
                />
            )}{" "}
        </div>
    );
};
export default ScrollToBottom;