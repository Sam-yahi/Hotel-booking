import { useState } from "react";
import { roomsDummyData } from "../../assets/assets";
import { AddRoom } from "./AddRoom";
import { ListRoom } from "./ListRoom";

const Toast = ({ message, onClose }) => (
  <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gray-900 text-white text-sm px-5 py-3 rounded-xl shadow-lg animate-fade-in">
    <span className="text-green-400">✓</span>
    {message}
    <button onClick={onClose} className="ml-2 text-gray-400 hover:text-white text-xs">✕</button>
  </div>
);

const RoomsData = ({ page }) => {
  const [rooms, setRooms] = useState(roomsDummyData);
  const [toast, setToast] = useState(false);

  const addRoom = (newRoom) => {
    setRooms((prev) => [...prev, {
      _id: crypto.randomUUID(),
      ...newRoom,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __v: 0,
    }]);
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  return (
    <>
      {page === "add" ? (
        <AddRoom addRoom={addRoom} />
      ) : (
        <ListRoom rooms={rooms} />
      )}
      {toast && (
        <Toast
          message="Room added successfully!"
          onClose={() => setToast(false)}
        />
      )}
    </>
  );
};

export default RoomsData;