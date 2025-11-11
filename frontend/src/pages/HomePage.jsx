import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, useUser } from '@clerk/clerk-react'
import toast from 'react-hot-toast'


const HomePage = () => {
  return (
    <div>
      <button className='btn btn-secondary ' onClick={()=> toast.success("seconsary button")}>toast button</button>
      <SignedOut>
        <SignInButton mode='modal'>
          <button className='btn btn-primary'>Login buttin</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton />
    </div>
  )
}

export default HomePage