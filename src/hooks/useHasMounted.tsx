"use client"

import * as React from 'react'
import { useState, useEffect } from 'react'

export default function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  return hasMounted
}
