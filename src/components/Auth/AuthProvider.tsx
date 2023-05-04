import * as React from 'react'
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}

export default AuthProvider
