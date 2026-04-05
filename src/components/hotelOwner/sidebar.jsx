import React from 'react'
import { NavLink } from 'react-router-dom'
import {addIcon,dashboardIcon,listIcon } from "../../assets/assets";


const sidebarItems = [
  { name: 'Dashboard', path: '/owner/dashboard', icon: dashboardIcon },
  { name: 'Add Room', path: '/owner/add-room', icon: addIcon },
  { name: 'List Rooms', path: '/owner/list-rooms', icon: listIcon }
]

export const Sidebar = () => {
  return (
    <div className='md:w-64 w-16 border-r h-500px text-base border-gray-200 pt-4 flex flex-col transition-all 
    duration-300 '>
      {sidebarItems.map((item, index) => (
        <NavLink key={index} to={item.path} className="hover:bg-gray-300 hover:text-blue-500 hover:border-r-4 hover:border-blue-500 p-2 flex items-center rounded mb-2 transition-colors duration-200 gap-2">
          <img src={item.icon} alt={item.name} className="w-5 h-5 mr-2" />
          {item.name}
        </NavLink>
      ))}
    </div>
  )
}
