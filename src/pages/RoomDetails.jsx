import React from 'react'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {assets, roomsDummyData, facilityIcons, testimonials} from '../assets/assets'; 
import { StarRating } from '../components/StarIcon'; 
import toast, { Toaster } from 'react-hot-toast';

// booking context
import { useBookings } from '../context/BookingContext';


const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

export const RoomDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    // look up using the _id field (string) rather than non-existent id
    const found = roomsDummyData.find((r) => r._id === id);
    if (found) {
      setRoom(found);
      setMainImage(found.images[0]); // Set the first image as the main image
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // modal / booking state
  const [showPopup, setShowPopup] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const { addBooking } = useBookings();

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    
    if (checkIn && checkOut) {
      // simple availability logic (could be replaced by real API call)
      const available = true; // for demo assume always available
      if (available) {
        setIsAvailable(true);
        setShowPopup(true);
      } else {
        toast.error('Room not available for selected dates.', { style: { fontSize: '12px' } });
      }
    } else {
      toast.error('Please select both check-in and check-out dates.', { style: { fontSize: '12px' } });
    }
  };
  
  // show a message while loading or if not found
  if (!room) {
    return (
      <div className="py-28 text-center">
        <p className="text-gray-500">Loading room details...</p>
      </div>
    );
  }
console.log(testimonials);
  return (
    <div className="flex flex-col py-28 md:text-xl text-lg px-4 md:px-16 lg:px-24 xl:px-32 gap-4">
    
        <div className='flex items-center gap-2 mt-1'>
          <h1 className="text-black ">{room.hotel.name}</h1>
          <span className='font-inter text-sm'>{'('.concat(room.roomType, ')')}</span>
          <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full w-19'>20% OFF</p>
       
      </div>
      {/* Room rating*/}
      <div className='flex items-center gap-4 mt-2'>
        <p className='text-sm text-gray-500'>Hosted by {room.hotel.owner.username}</p>
        <div className='flex items-center gap-1'>
          <StarRating rating={room.hotel.rating} />
          <p className='text-sm text-gray-500'>(200+ reviews)</p>
        </div>
      </div>
      {/* Room Address */}
      <div className='flex items-center gap-1 text-gray-500 text-sm font-light' >
        <img src={assets.locationFilledIcon} alt="location-icon" />
        <span>{room.hotel.address}</span>
      </div>

      {/* Room Images */}
      <div className='mt-[60px] flex  flex-col lg:flex-row gap-4 border border-gray-200 rounded-xl p-4' >
        <div className='lg:w-1/2 w-full'>
          <img src={mainImage} alt="main-room" className='w-full shadow-lg object-cover rounded-xl' />
        </div>
        <div className='w-1/2 grid grid-cols-2 gap-4'>
          {room.images.slice(0, 4).map((img, index) => (
            <img 
              key={index} 
              src={img}
              alt={`room-${index}`}
              className='w-full  object-cover shadow-md rounded-lg cursor-pointer'
              onClick={() => setMainImage(img)} // Update main image on click
            />
          ))}
        </div>
      </div>
      {/* Room Highlights */}
      <div className='mt-4 flex flex-row justify-between '>
       <div className='flex flex-col gap-4'>
         <h2 className='text-2xl font-semibold'>Experience Luxury Like Never Before</h2>
        <ul className='flex flex-row text-sm list-none pl-0 mt-2 gap-4'>
          {room.amenities.map((highlight, index) => (
            <li key={index} className="flex items-center gap-1 text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
              <img src={facilityIcons[highlight]} alt={highlight} className="w-4 h-4" />
              {highlight}
            </li>
          ))}
        </ul>
       </div>
       <h2 className='text-2xl font-semibold mt-4'>${room.pricePerNight}/night</h2>
      </div>
     
      {/* Room check availabilty */}
      <form className='mt-8 flex flex-col md:flex-row items-start md:items-center gap-4 
      justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] rounded-lg p-4' onSubmit={handleCheckAvailability}>
        <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 w-full md:w-auto  text-sm text-gray-500'>
          <label htmlFor="check-in" className='text-sm text-gray-500'>Check-in</label>
          <input
            type="date"
            id="check-in"
            className='border border-gray-300 rounded-md px-3 py-2 w-full'
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 w-full md:w-auto  text-sm text-gray-500'>
          <label htmlFor="check-out" className='text-sm text-gray-500'>Check-out</label>
          <input
            type="date"
            id="check-out"
            className='border border-gray-300 rounded-md px-3 py-2 w-full'
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        <button type="submit" className='bg-blue-500 text-sm text-white px-6 py-3  rounded-md w-10 md:w-auto cursor-pointer'>Check Availability</button>
      </form>

      {/* booking pop-up */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-80 flex items-center justify-center z-50  shadow-lg">
          <div className="bg-white  flex  pl-3 text-sm rounded border border-gray-300/60">
            <div className="py-2.5 flex justify-center flex-col pr-3">
              <h3 className="text-gray-700 font-medium">
                {isAvailable ? 'Room is available. Wanna book?' : 'Room not available.'}
              </h3>
            </div>
            {isAvailable && (
              <div className="flex flex-row items-center divide-y divide-gray-500/30">
                <button
                  type="button"
                  className="text-indigo-500 font-medium cursor-pointer h-full w-28 hover:bg-indigo-500/10 transition-all"
                  onClick={() => {
                    setShowPopup(false);
                    navigate('/hotel-registration', { state: { room, checkIn, checkOut } });
                  }}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="text-gray-500 font-medium cursor-pointer h-full w-28 hover:bg-gray-300/10 transition-all"
                  onClick={() => setShowPopup(false)}
                >
                  No
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <Toaster/>
       {/* Room Common Data */}
      <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {roomCommonData.map((item, index) => (
          <div key={index} className='flex flex-col items-start gap-2 p-4 bg-gray-50 rounded-lg border border-gray-200'>
            <img src={item.icon} alt={item.title} className='w-6 h-6' />
            <h3 className='text-sm font-semibold text-gray-800'>{item.title}</h3>
            <p className='text-xs text-gray-600'>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="max-w-3xl my-14 py-10 text-gray-300"> 
        <p className='text-sm text-gray-500 border-y border-gray-300 py-4'>
          Guests will be allocated on the ground floor according to availability. You get a comfortable 
          Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest 
          slot please mark the number of guests to get the exact price for groups. The Guests will be
           allocated ground floor according to availability.
           You get the comfortable two bedroom apartment that has a true city feeling.
        </p>

      </div>
   
      {/* Hosted By */}
      <div className='flex flex-col items start gap-4'>
        <div className='flex gap-4 '>
          <img src={room.hotel.owner.image} alt="Hosted by" className='h-14 w-14 md:h-18 md:w-18 rounded full '/>
         <div className='flex flex-col gap-1 justify-center'>
           <span><p className='text-md md:text-xl   '>Hosted by {testimonials[0].name}</p></span>
          <div className='flex items-center mt-1 '>
            <StarRating rating={testimonials[0].rating} />
            <p className='text-sm text-gray-500'>+200 reviews</p>
          </div>
         </div>
        </div>
        <button className='bg-blue-500 text-white  text-sm px-6 py-3 rounded-md w-35 cursor-pointer'>Contact Host</button>

      </div>
    </div>
    
  );
  
}
