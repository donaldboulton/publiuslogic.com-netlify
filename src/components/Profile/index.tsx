import * as React from 'react'
import { useGoogleAuth } from '@/components/GoogleAuthProvider'

const Profile = () => {
  const { googleUser } = useGoogleAuth()

  return (
    <div title="Your Profile">
      <h2>{googleUser.profileObj.name}</h2>
      <img src={googleUser.profileObj.imageUrl} />
      <p>Welcome back to your profile, {googleUser.profileObj.email}</p>!
      <p>This is a client-only route. You could set up a form to save information about a user here.</p>
    </div>
  )
}

export default Profile
