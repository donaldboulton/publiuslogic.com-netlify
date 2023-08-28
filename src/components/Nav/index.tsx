const Navigation = () => {
  if (typeof window === 'undefined') {
    return null
  }
  // Pretend that this function exists,
  // and returns either a user object or `null`.
  const user = getUser()
  if (user) {
    return <AuthenticatedNav user={user} />
  }
  return (
    <nav>
      <a href="/login">Login</a>
    </nav>
  )
}
