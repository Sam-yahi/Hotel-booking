import React from "react";
import { Link } from "react-router-dom";
import star from "../assets/starIconFilled.svg"
const HotelCard = ({room,index}) => {
return (
  <Link to={'room/' + room._id} onClick={()=> scroll(0,0)}
  key={room._id}
  className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90
  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] ">
    <img src={room.images[0]} alt="" />
    {index % 2 === 0 && <p className="px-3 py-1 absolute top-3 left-3 text-xs
    bg-white text-gray-800 font-medium rounded-full">Special Offer</p>}
    <div className="p-4 pt-5">
      <div className="flex items-center justify-between mb-2">
        <p className="font-playfair text-xl font-medium text-gray-800">{room.hotel.name}</p>
        <div className="flex items-center gap-1">
          <img src={star} alt="star" className="w-4 h-4 object-contain"/>
          <span className="text-sm font-medium text-gray-800">4.9</span>
        </div>
      </div>          
      <p className="text-sm mb-4">{room.hotel.location}</p>
      <p className="text-lg font-semibold text-gray-800 mb-22">$ {room.pricePerNight} <span className="text-sm font-medium text-gray-500/90">/ night</span></p>
      <button id="featured" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium
      py-3 rounded-lg transition">Book Now</button>
    </div>
  </Link>
);
}
export default HotelCard;