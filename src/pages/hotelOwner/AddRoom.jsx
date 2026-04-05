// AddRoom.jsx
import { useState } from "react";
import { assets, facilityIcons, hotelDummyData } from "../../assets/assets";

const ROOM_TYPES = ["Single Bed", "Double Bed", "Suite", "Deluxe", "Penthouse", "Family"];

const AMENITIES = [
  { id: "Free WiFi", label: "Free WiFi" },
  { id: "Free Breakfast", label: "Free Breakfast" },
  { id: "Room Service", label: "Room Service" },
  { id: "Mountain View", label: "Mountain View" },
  { id: "Pool Access", label: "Pool Access" },
];

export const AddRoom = ({ addRoom }) => {
  const [images, setImages] = useState({ 0: null, 1: null, 2: null, 3: null });
  const [roomType, setRoomType] = useState("");
  const [price, setPrice] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [isAvailable, setIsAvailable] = useState(true);

  const handleImageUpload = (index, file) => {
    setImages((prev) => ({
      ...prev,
      [index]: { url: URL.createObjectURL(file), file },
    }));
  };

  const removeImage = (index) => {
    setImages((prev) => ({ ...prev, [index]: null }));
  };

  const toggleAmenity = (id) =>
    setAmenities((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    addRoom({
      roomType,
      pricePerNight: Number(price),
      amenities,
      isAvailable,
      images: Object.values(images).filter(Boolean).map((img) => img.url),
      hotel: hotelDummyData,
    });
    setRoomType("");
    setPrice("");
    setAmenities([]);
    setImages({ 0: null, 1: null, 2: null, 3: null });
    setIsAvailable(true);
  };

  return (
    <div className="px-8 py-6 max-w-2xl">
      <h1 className="text-2xl font-semibold text-gray-800">Add Room</h1>
      <p className="text-sm text-gray-500 mt-1 max-w-lg">
        Fill in the details carefully and accurate room details, pricing, and amenities,
        to enhance the user booking experience.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-8">

        {/* Images */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-3">Images</p>
          <div className="flex gap-3 flex-wrap">
            {Object.entries(images).map(([index, img]) => (
              <label key={index} className="relative cursor-pointer group">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) =>
                    e.target.files[0] && handleImageUpload(index, e.target.files[0])
                  }
                />
                {img ? (
                  <>
                    <img
                      src={img.url}
                      alt={`room-${index}`}
                      className="rounded-lg border border-gray-200 object-cover"
                      style={{ height: "72px", width: "96px" }}
                    />
                    <button
                      type="button"
                      onClick={(e) => { e.preventDefault(); removeImage(index); }}
                      className="absolute top-1 right-1 bg-black/50 text-white rounded-full w-4 h-4 text-xs items-center justify-center hidden group-hover:flex"
                    >
                      ✕
                    </button>
                  </>
                ) : (
                  <div
                    className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400 hover:border-gray-400 transition-colors"
                    style={{ height: "72px", width: "96px" }}
                  >
                    <img src={assets.uploadArea} alt="upload" className="w-6 h-6 opacity-40" />
                  </div>
                )}
              </label>
            ))}
          </div>
        </div>

        {/* Room Type + Price */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">Room Type</label>
            <div className="relative">
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-gray-400 appearance-none"
              >
                <option value="">Select Room Type</option>
                {ROOM_TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">▾</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">
              Price <span className="text-gray-400 font-normal">/night</span>
            </label>
            <input
              type="number"
              min={0}
              placeholder="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
            />
          </div>
        </div>

        {/* Amenities */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-3">Amenities</p>
          <div className="grid grid-cols-2 gap-3">
            {AMENITIES.map((a) => (
              <label key={a.id} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={amenities.includes(a.id)}
                  onChange={() => toggleAmenity(a.id)}
                  className="w-4 h-4 accent-gray-700"
                />
                {facilityIcons[a.id] && (
                  <img src={facilityIcons[a.id]} alt={a.label} className="w-5 h-5" />
                )}
                <span className="text-sm text-gray-600">{a.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="availability"
            checked={isAvailable}
            onChange={(e) => setIsAvailable(e.target.checked)}
            className="w-4 h-4 accent-gray-700"
          />
          <label htmlFor="availability" className="text-sm text-gray-700 cursor-pointer">
            Available for booking
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium px-8 py-2.5 rounded-lg transition-colors"
        >
          Add Room
        </button>

      </form>
    </div>
  );
};