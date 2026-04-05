import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { Show, SignInButton, UserButton } from '@clerk/react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4  w-full">
      <div className="container mx-auto flex flex-row justify-between ">
        <Link to="/" className="text-2xl font-bold">
          <img src={logo} alt="HotelMania Logo" />
        </Link>

        <div className="flex items-center gap-2">
          <Show when="signed-in" fallback={
            <SignInButton mode="modal">
              <span className="px-4 py-2 rounded bg-white text-black">Sign in</span>
            </SignInButton>
          }>
            <UserButton />
          </Show>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
