/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useHotelsQuery } from "../Redux/hotel/hotelApi";

const Hotels = () => {
  const navigate = useNavigate();
  const query = {
    limit: 20,
  };

  const { data, isLoading } = useHotelsQuery(query);
  console.log("data:", data);
  return (
    <div className="container mx-auto px-4 py-8">
      {isLoading ? (
        <div className="text-center text-lg font-semibold">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  ">
          {data?.data.map((item: any) => (
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden"
              key={item._id}
            >
              <img
                className="w-full h-40 object-cover object-center"
                src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
                alt=""
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item?.name}</h2>
                <p className="text-gray-600 mb-2">{item.title}</p>
                <p className="text-gray-700 mb-4">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-700">Rating: {item.rating}</p>
                  <p className="text-gray-700">Price: {item.cheapestPrice}</p>
                </div>
                <button
                  onClick={() => navigate(`/rooms/${item._id}`)}
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Details Room
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hotels;
