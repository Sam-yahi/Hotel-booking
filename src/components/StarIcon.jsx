import React from 'react'
import starFilled from '../assets/starIconFilled.svg';
import starOutlined from '../assets/starIconOutlined.svg';


export const StarIcon = ({ filled = true }) => {
  return (
    <div className="w-5 h-5">
      <img 
        src={filled ? starFilled : starOutlined} 
        alt={filled ? "filled-star" : "outlined-star"} 
        className="w-full h-full object-contain" 
      />
    </div>
  )
}

export const StarRating = ({ rating = 4 }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);
  
  return (
    <div className="flex gap-1">
      {stars.map((isFilled, index) => (
        <StarIcon key={index} filled={isFilled} />
      ))}
    </div>
  )
}
