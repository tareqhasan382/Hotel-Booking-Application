import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchHotels } from "../utils/api";
import { RootState } from "../Redux/store";
import { addHotel, hotels } from "../Redux/hotel/note";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const hotel = useSelector((state: RootState) => state.hotel.data);
  useEffect(() => {
    dispatch(hotels(fetchHotels()));
  }, [dispatch]);

  const handleAddHotel = async () => {
    const newHotelData = {
      id: hotels.length + 1,
      name: "New Hotel",
      location: "New Location",
      rooms: [],
    };
    dispatch(addHotel(newHotelData));
  };
  const handleUpdateHotel = (id: number) => {
    console.log(id);
  };
  const handleDeleteHotel = (id: number) => {
    console.log(id);
  };
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <button
        onClick={handleAddHotel}
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Add Hotel
      </button>

      <div className="w-full flex flex-col items-center justify-center mt-8">
        {hotel.map((item) => (
          <div
            key={item.id}
            className="w-full max-w-xl bg-white rounded-md shadow-md p-4 mb-4"
          >
            <h1 className="text-xl font-bold mb-2">{item.name}</h1>
            <p className="text-gray-600">{item.location}</p>
            {/* Add buttons for update and delete */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => handleUpdateHotel(item.id)}
                className="text-blue-500 hover:text-blue-600 mr-4"
              >
                Update
              </button>
              <button
                onClick={() => handleDeleteHotel(item.id)}
                className="text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
