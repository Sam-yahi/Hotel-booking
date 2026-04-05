import React from "react";  
import arrowIcon from "../assets/arrowIcon.svg"
import { exclusiveOffers } from "../assets/assets";
const ExclusiveOffers =() => {
  return (<>
       <div className="max-w-100% mx-auto px-6 md:px-16 lg:px-24 xl:px-18 py-16 flex flex-row justify-around ">
        <div className=" flex flex-col gap-5">
                <h2 className="font-playfair text-center lg:text-left text-3xl font-semibold text-gray-900">
                  Exclusive Offers
                </h2>
                <h5 className="text-center text-gray-700 ">Take advantage of our limited-time offers and special packages to enhance your 
                stay and create unforgettable memories.
                </h5>
        </div>




                <div className="lg:visible collapse">
                  <button className="mx-auto block text-gray-900  font-semibold text-sm py-2 px-10 rounded  flex flex-row items-center gap-2">View All Offers
                  <img src={arrowIcon} alt="" className="group-hover:translate-x-1 transition-all"/>
                <style>{`
                  button:hover img {
                    transform: translateX(4px);
                  }
                `}</style>
                </button>
                </div>
                
   
        
        </div>
        <div className="flex flex-col lg:flex-row overflow-x-scroll gap-6 px-6 md:px-8 lg:px-16 xl:px-24 pb-10">
          {exclusiveOffers.map((offer)=>(
            <div key={offer.id} className="lg:max-w-100% mx-auto px-6  ">
              <div className="relative">
                <img src={offer.image} alt={offer.title} className="w-full h-auto rounded-lg shadow-lg"/>
                <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white
                  text-gray-800 font-medium rounded-full">{offer.priceOff}%OFF</p>
                <div className="absolute bottom-4 left-4 text-white bg-opacity-75 p-4 rounded-lg shadow-md">
                  
                  <h3 className="text-sm font-semibold text-white">{offer.title}</h3>
                  <p className="text-white line-clamp-2">{offer.description}</p>
                  <p>Expires {offer.expiryDate}</p>

                  <button className=" text-white ">
                    View Offers <img src={arrowIcon} alt="" className="group-hover:translate-x-1 transition-all brightness-0"/>
                  
                <style>{`
                  button:hover img {
                    transform: translateX(4px);
                  }
                `}</style>
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>  
  )
}       
export default ExclusiveOffers;