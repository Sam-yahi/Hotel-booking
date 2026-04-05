
import Home from "./pages/Home.jsx"
import { Routes, useLocation } from "react-router-dom"

import Navbar from "./components/Navbar.jsx"
import Footer from "./components/footer.jsx"
import AllRooms from "./pages/AllRooms.jsx"
import { RoomDetails } from "./pages/RoomDetails.jsx"
import { MyBookings } from "./pages/MyBookings.jsx"
import { HotelRegistration } from "./pages/HotelRegistration.jsx"
import { Layout } from "./pages/hotelOwner/Layout.jsx"
import { Route } from "react-router-dom"

// booking provider
import { BookingProvider } from "./context/BookingContext.jsx"
import { Dashboard } from "./pages/hotelOwner/Dashboard.jsx"
import { AddRoom } from "./pages/hotelOwner/AddRoom.jsx"
import { ListRoom } from "./pages/hotelOwner/ListRoom.jsx"
import RoomsData from "./pages/hotelOwner/Roomsdata.jsx"



function App() {

const isOwnerPath = useLocation().pathname.includes('/owner');
  return (
    <BookingProvider>
      <div>
        {!isOwnerPath && <Navbar /> }
        <div className="min-h-[70vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<AllRooms />} />
            <Route path="/room/:id" element={<RoomDetails />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/hotel-registration" element={<HotelRegistration />} />
            <Route path="/owner" element={<Layout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="/owner/add-room" element={<RoomsData page="add" />} />
              <Route path="/owner/list-rooms" element={<RoomsData page="list" />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </BookingProvider>
    



      
    
  )
}

export default App
