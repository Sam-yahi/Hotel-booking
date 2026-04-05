import { useState } from "react";
import { assets, facilityIcons, roomsDummyData } from "../../assets/assets";

export const ListRoom = ({ rooms = roomsDummyData }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="px-6 py-6 pb-16">
      <h1 className="text-2xl font-semibold text-gray-800">List Room</h1>
      <p className="text-sm text-gray-500 mt-1 mb-6">
        Manage and view all rooms available in your hotel.
      </p>

      {rooms.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-gray-400">
          <img src={assets.uploadArea} alt="empty" className="w-16 h-16 opacity-30 mb-3" />
          <p className="text-sm">No rooms added yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {rooms.map((room) => (
            <div
              key={room._id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden flex-shrink-0">
                <img
                  src={room.images[0]}
                  alt={room.roomType}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ height: "200px" }}
                />
                <span className={`absolute top-2 left-2 text-xs font-medium px-2.5 py-1 rounded-full ${
                  room.isAvailable
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}>
                  {room.isAvailable ? "Available" : "Unavailable"}
                </span>

                {/* Floating button */}
                <button
                  onClick={() => setSelectedRoom(room)}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-4 py-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 whitespace-nowrap hover:bg-white border border-gray-100"
                >
                  More Details
                </button>
              </div>

              {/* Card Info */}
              <div className="p-4 flex flex-col gap-1 flex-1">
                <h2 className="font-semibold text-gray-800 text-sm leading-tight">
                  {room.roomType}
                </h2>
                <p className="text-gray-400 text-xs">{room.hotel?.name || "—"}</p>
                <div className="flex items-center justify-between mt-auto pt-3">
                  <span className="text-gray-800 font-semibold text-sm">
                    ${room.pricePerNight}
                    <span className="text-gray-400 font-normal text-xs"> /night</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    {room.amenities.slice(0, 2).map((a) =>
                      facilityIcons[a] ? (
                        <img
                          key={a}
                          src={facilityIcons[a]}
                          alt={a}
                          className="w-4 h-4 opacity-50"
                          title={a}
                        />
                      ) : null
                    )}
                    {room.amenities.length > 2 && (
                      <span className="text-xs text-gray-400 font-medium">
                        +{room.amenities.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedRoom && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedRoom(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Strip */}
            <div className="flex gap-0.5 h-48 flex-shrink-0">
              {selectedRoom.images.slice(0, 4).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`room-${i}`}
                  className={`object-cover h-full ${i === 0 ? "w-1/2" : "flex-1"}`}
                />
              ))}
            </div>

            {/* Details */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {selectedRoom.roomType}
                  </h2>
                  <p className="text-sm text-gray-400 mt-0.5 flex items-center gap-1">
                    <img src={assets.locationIcon} alt="location" className="w-3.5 h-3.5" />
                    {selectedRoom.hotel?.address || "—"}
                  </p>
                </div>
                <span className={`flex-shrink-0 text-xs font-medium px-3 py-1 rounded-full ${
                  selectedRoom.isAvailable
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}>
                  {selectedRoom.isAvailable ? "Available" : "Unavailable"}
                </span>
              </div>

              {/* Price */}
              <div className="mt-4 flex items-end gap-1">
                <span className="text-2xl font-bold text-gray-800">
                  ${selectedRoom.pricePerNight}
                </span>
                <span className="text-gray-400 text-sm mb-0.5">/night</span>
              </div>

              {/* Amenities */}
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Amenities
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedRoom.amenities.map((a) => (
                    <span
                      key={a}
                      className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full"
                    >
                      {facilityIcons[a] && (
                        <img src={facilityIcons[a]} alt={a} className="w-3.5 h-3.5" />
                      )}
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meta Grid */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-0.5">Hotel</p>
                  <p className="text-sm font-medium text-gray-700 truncate">
                    {selectedRoom.hotel?.name || "—"}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-0.5">City</p>
                  <p className="text-sm font-medium text-gray-700">
                    {selectedRoom.hotel?.city || "—"}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-0.5">Added On</p>
                  <p className="text-sm font-medium text-gray-700">
                    {new Date(selectedRoom.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-0.5">Contact</p>
                  <p className="text-sm font-medium text-gray-700">
                    {selectedRoom.hotel?.contact || "—"}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedRoom(null)}
                className="mt-5 w-full bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};