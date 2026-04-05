import React from 'react'
import {dashboardDummyData, totalBookingIcon,totalRevenueIcon, userBookingsDummyData} from "../../assets/assets"
console.log(userBookingsDummyData)
const statusStyles = {
  pending: 'bg-yellow-100 text-yellow-800',
  Completed: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800', // easy to extend
};
export const Dashboard = () => {
  return (
    <div> 
      <h1 className='text-4xl font-medium '>Dashboard</h1>
       <p>This is the hotel owner's dashboard.</p>
       <div className='flex flex-row gap-4 mt-4'>
            <div className='bg-blue-100 p-4 rounded flex flex-col items-center gap-2'>
                <div className='flex items-center gap-2'>
                  <img src={totalBookingIcon} alt="Total Bookings" />
                  <h2 className='text-lg font-semibold text-blue-600'>Total Bookings</h2>
                </div>
                
                <p className='text-lg font-medium  text-gray-500'>{dashboardDummyData.totalBookings}</p>
            </div>
             <div className='bg-blue-100 p-4 rounded flex flex-col items-center gap-2'>
                <div className='flex items-center gap-2'>
                  <img src={totalRevenueIcon} alt="Total Revenue" />
                  <h2 className='text-lg font-semibold text-blue-600'>Total Revenue</h2>
                </div>
                
                <p className='text-lg font-medium text-gray-500'>{dashboardDummyData.totalRevenue}</p>
            </div>

            
       </div>
       <div >
                 <h2>Recent Bookings</h2>
                  <table className='w-full mt-4 border border-gray-300 rounded'>
                    <thead>
                      <tr className='bg-gray-200'>
                     
                        <th className='p-2 border-b border-gray-300'>User</th>
                        <th className='p-2 border-b border-gray-300'>Room</th>
                        <th className='p-2 border-b border-gray-300'>Price</th>
                        <th className='p-2 border-b border-gray-300'>Date</th>
                        <th className='p-2 border-b border-gray-300'>Status</th>
                      </tr>
                    </thead>
                    
                    <tbody>
                   {userBookingsDummyData.map((item, index) => (
                        <tr key={index} className='hover:bg-gray-100'>
                          <td className='p-2 border-b border-gray-300'>{item.user.username}</td>
                          <td className='p-2 border-b border-gray-300'>{item.room.roomType}</td>
                          <td className='p-2 border-b border-gray-300'>{item.room.pricePerNight}$</td>
                          <td className='p-2 border-b border-gray-300'>{item.hotel.createdAt}</td>
                          <td className='p-2 border-b border-gray-300 text-center p-4'><span className={`p-2 rounded-full ${statusStyles[item.status] ?? ''}`}>
                            {item.status}
                          </span>
                          </td>
                      
                        </tr>
                      ))}  
                    </tbody>
                  </table>
       </div>
       <div className='mt-4'>
       </div>
    </div> 
   
  )
}
