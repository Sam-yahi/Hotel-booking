import HotelCard from "./HotelCard";
import {roomsDummyData} from "../assets/assets.js"
import { useNavigate } from "react-router-dom";

const FeaturedContent = () => {
    const navigate = useNavigate();
  return (
   <div className="max-w-100% mx-auto px-6 md:px-16 lg:px-24 xl:px-32 py-16 flex flex-col gap-10">
        <h2 className="font-playfair  text-center text-3xl font-semibold text-gray-900">
            Featured Hotels
        </h2>
        <h5 className="text-center text-gray-700 ">Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {roomsDummyData.slice(0,4).map((room,index)=>(
              <HotelCard room={room} index={index} key={room._id}/>
            ))}
        </div>

        <button id="featured" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium
        py-3 rounded-lg transition" onClick={()=>{navigate('/rooms'); scrollTo(0,0);}}>View All Hotels</button>
   </div>
  );
}
export default FeaturedContent;