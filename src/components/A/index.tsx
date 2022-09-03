import * as React from 'react'
import { ReactNode } from 'react'
import { Link } from 'gatsby'

interface AProps {
  href: string
  external?: boolean
  className?: string
  children: ReactNode
}
export default function A({ href, external = false, className, children }: AProps) {
  if (external) {
    return (
      <a
        key={href}
        href={href}
        className={`text-slate-200 dark:text-slate-200 hover:text-fuchsia-600 ${className}`}
        rel="me"
        target="_blank"
        area-label="Social Link"
      >
        {children}
      </a>
    )
  } else {
    return (
      <Link
        to={href}
        rel="me"
        target="_blank"
        className={`text-slate-200 dark:text-slate-200 hover:text-fuchsia-600 ${className}`}
        activeClassName="active"
      >
        {children}
      </Link>
    )
  }
}
