import React from "react";


const RoomsCard = ({ 
    image = "hotel-img", 
    location = "New York", 
    hotelName = "Urbanza Suites", 
    rating = 4, 
    reviews = "200+", 
    address = "Main Road 123 Street , 23 Colony",
    amenities = ["Room Service", "Mountain View", "Pool Access"],
    price = 399
}) => {
    const amenityIcons = {
        "Room Service": <Users size={20} />,
        "Mountain View": <Mountain size={20} />,
        "Pool Access": <Anchor size={20} />
    };

    return (
        <div className="flex gap-6 p-6 max-w-2xl border-b">
            {/* Image Section */}
            <div className="w-1/3 flex-shrink-0">
                <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                    <span className="text-gray-500">{image}</span>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-1">
                {/* Location */}
                <p className="text-blue-600 text-sm mb-2">{location}</p>

                {/* Hotel Name */}
                <h2 className="text-3xl font-serif text-gray-900 mb-3">{hotelName}</h2>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < rating ? "text-orange-500 text-lg" : "text-gray-300 text-lg"}>
                                ★
                            </span>
                        ))}
                    </div>
                    <span className="text-gray-700 font-medium">{reviews} reviews</span>
                </div>

                {/* Address */}
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin size={18} />
                    <span>{address}</span>
                </div>

                {/* Amenities */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    {amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2">
                            {amenityIcons[amenity]}
                            <span className="text-gray-700 text-sm">{amenity}</span>
                        </div>
                    ))}
                </div>

                {/* Price */}
                <p className="text-2xl font-semibold text-gray-900">
                    ${price} <span className="text-lg text-gray-600">/night</span>
                </p>
            </div>
        </div>
    );
};

export default RoomsCard;