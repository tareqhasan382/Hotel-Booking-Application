/* eslint-disable @typescript-eslint/no-explicit-any */

import { useNavigate, useParams } from "react-router-dom";
import { useHotelRoomsQuery } from "../Redux/hotel/hotelApi";

const Rooms = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useHotelRoomsQuery(id);
  console.log("data:", data);
  return (
    <div className="container mx-auto px-4 py-8">
      {isLoading ? (
        <div className="text-center text-lg font-semibold">Loading...</div>
      ) : (
        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {data.map((item: any) => (
            <div
              className="bg-white rounded-lg shadow-md overflow-hidden  "
              key={item._id}
            >
              <img
                className="w-full h-40 object-cover object-center"
                src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
                alt=""
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item?.title}</h2>
                <p className="text-gray-600 mb-2">{item.desc}</p>
                <p className="text-gray-700 mb-4">maxPeople:{item.maxPeople}</p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-700">Price: {item.price}</p>

                  <div>
                    {item.roomNumbers.map((x: any) => (
                      <div key={x._id}>
                        <p className="text-gray-700">roomNumbers:{x.number}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/reserve/${item._id}`)}
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Reserve Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Rooms;
