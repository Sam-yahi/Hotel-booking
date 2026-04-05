import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { roomsDummyData } from "../assets/assets";
import star from "../assets/starIconFilled.svg"
import OutlinedStar from "../assets/starIconOutlined.svg"
import {facilityIcons} from "../assets/assets";

const CheckBox = ({ label, selected= false, onChange }) => (
    <label className="flex items-center gap-2">
        <input
            type="checkbox"
            checked={selected}
            onChange={onChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <span className="text-sm font-medium text-gray-700">{label}</span>
    </label>
);
const RadioButton = ({ label, selected= false, onChange }) => (
    <label className="flex items-center gap-2">
        <input
            type="radio"
            checked={selected}      
            onChange={onChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
        />
        <span className="text-sm font-medium text-gray-700">{label}</span>
    </label>
);

const Rooms = () => {
    const [openFilter, setOpenFilter] = useState(false);
    const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState("");
    
    const roomTypes = ["Single Bed", "Double Bed", "Luxury Bed", "Family Suite"];
    const priceRanges = ["0 to 500", "500 to 1000", "1000 to 2000", "2000 to 3000"];

    const roomsData = roomsDummyData.map((room) => ({
        id: room._id,
        image: room.images[0],
        location: room.hotel.city,
        hotelName: room.hotel.name,
        rating: 4,
        reviews: "200+",
        address: room.hotel.address,
        amenities: room.amenities,
        price: room.pricePerNight,
        roomType: room.roomType
    }));

    // Filter logic
    const filteredRooms = roomsData.filter((room) => {
        // Check room type filter
        if (selectedRoomTypes.length > 0 && !selectedRoomTypes.includes(room.roomType)) {
            return false;
        }

        // Check price range filter
        if (selectedPriceRange) {
            const [minPrice, maxPrice] = selectedPriceRange.split(" to ").map(Number);
            if (room.price < minPrice || room.price > maxPrice) {
                return false;
            }
        }

        return true;
    });

    const handleRoomTypeChange = (type) => {
        setSelectedRoomTypes((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };

    const handlePriceRangeChange = (range) => {
        setSelectedPriceRange(selectedPriceRange === range ? "" : range);
    };

    return (
        <div className="max-w-100% mx-auto ">
             {/* Header Section */}
            <div className="flex flex-col gap-5 px-6 md:px-16 lg:px-24 xl:px-18 py-16">
                <h2 className="text-left text-3xl font-semibold text-gray-900">
                    Hotel Rooms
                </h2>
                <h5 className="text-gray-700">Take advantage of our limited-time offers and special packages to 
                    enhance your stay and create unforgettable memories.
                </h5>
            </div>
            <div className="flex flex-col-reverse lg:flex-row gap-8 px-6 md:px-16 lg:px-24 xl:px-18">
        

            {/* Rooms Cards Grid */}
            <div className="flex-1">
                {filteredRooms.map((room) => (
                    <div key={room.id} className="bg-white shadow rounded-lg p-4 flex gap-4 mb-4 lg:flex-row flex-col">
                        <img src={room.image} alt={room.hotelName} className="w-80 h-70 object-cover rounded" />
                        <div className="flex-1 flex flex-col justify-between px-2 py-1 ">
                            <h3 className="text-3xl font-semibold">
                                <Link to={`/room/${room.id}`} className="hover:underline">
                                    {room.hotelName}
                                </Link>
                            </h3>
                            <p className="text-sm text-yellow-500 flex flex-row"><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={OutlinedStar} alt="" />

                              {room.reviews} reviews</p>
                            <p className="text-sm text-gray-600">{room.location} — {room.address}</p>
                            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                                {room.amenities.slice(0, 4).map((amenity, index) => (
                                    <div key={index} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                                        <img src={facilityIcons[amenity]} alt={amenity} className="w-5 h-5" />
                                        <span className="text-sm text-gray-700">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-700">{room.roomType} · ${room.price}/night</p>
                            
                        </div>
                    </div>
                ))}
            </div>
           
          
            {/* Filter Sidebar */}
            <div className="lg:w-64 w-full">
                <div className={`flex items-center justify-between px-5 py-2.5 border-b border-gray-300`}>
                    <p className="text-base font-medium text-gray-800">FILTERS</p>
                    <div className="text-xs cursor-pointer">
                        <span onClick={()=> setOpenFilter(!openFilter)} className="lg:hidden">{openFilter ? "HIDE" : "SHOW"} FILTERS</span>
                        <span 
                            onClick={() => {
                                setSelectedRoomTypes([]);
                                setSelectedPriceRange("");
                            }}
                            className="hidden lg:block hover:text-blue-600"
                        >
                            CLEAR
                        </span>
                    </div>
                </div>
                <div className={`${openFilter ? "h-auto" : "h-0 lg:h-auto"} overflow-hidden transition-all duration-700`}>
                    <div className="px-5 pt-5">
                        <p className="font-medium text-gray-800 pb-3">Popular filters</p>
                        <div className="space-y-3">
                            {roomTypes.map((type, index) => (
                                <CheckBox 
                                    key={index} 
                                    label={type}
                                    selected={selectedRoomTypes.includes(type)}
                                    onChange={() => handleRoomTypeChange(type)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="px-5 pt-6">
                        <p className="font-medium text-gray-800 pb-3">Price range</p>
                        <div className="space-y-3">
                            {priceRanges.map((range, index) => (
                                <RadioButton 
                                    key={index} 
                                    label={range}
                                    selected={selectedPriceRange === range}
                                    onChange={() => handlePriceRangeChange(range)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        
    );
};

export default Rooms;