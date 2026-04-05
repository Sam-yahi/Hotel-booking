import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/hotelOwner/navbar'
import { Sidebar } from '../../components/hotelOwner/sidebar'

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col border border-gray-800 rounded">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Navbar />
        </div>
      </header>
      <main className="flex container h-150 mx-auto p-4 border border-gray-800 rounded mt-4 flex">
        <div className='flex h-full w-full'>
          <Sidebar />
          <div className='flex-1 p-4'>
            <Outlet />
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2024 HotelMania. All rights reserved.
      </footer>
    </div>
  )
}
