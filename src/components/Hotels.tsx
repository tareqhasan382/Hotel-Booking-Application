import { useNavigate } from "react-router-dom";
import { Hotel, useHotelsQuery } from "../Redux/hotel/hotelApi";
import LoaderModal from "./Loader";
import { useState } from "react";
import { FaLocationDot, FaPerson } from "react-icons/fa6";
import { CalendarDays, Minus, Plus } from "lucide-react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

interface Options {
  adult: number;
  children: number;
  room: number;
}
interface CustomDateRange {
  startDate: Date;
  endDate: Date;
  key: string;
}
const Hotels = () => {
  const navigate = useNavigate();

  const [openDate, setOpenDate] = useState<boolean>(false);
  const [dates, setDates] = useState<CustomDateRange[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [destination, setDestination] = useState<string>("");
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const [options, setOptions] = useState<Options>({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name: keyof Options, operation: "i" | "d") => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1,
    }));
  };

  const query = {
    limit: 20,
  };

  const { data, isLoading } = useHotelsQuery(query);

  const handleSearch = () => {
    console.log("dates:", {
      startDate: format(dates[0]?.startDate, "MM/dd/yyyy"),
      endDate: format(dates[0]?.endDate, "MM/dd/yyyy"),
    });
    console.log("destination:", destination);
    console.log("options:", options.adult);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {isLoading ? (
        <LoaderModal />
      ) : (
        <>
          <div className="p-2 mb-5">
            <div className="bg-white text-black lg:py-1 py-4 rounded-md pl-2 shadow-md shadow-black lg:mx-10 mx-3 lg:h-10 md:h-48 flex flex-col lg:flex-row items-start lg:items-center justify-between">
              <div className="grid lg:grid-cols-3 gap-4 my-2">
                <div className="flex items-center gap-1">
                  <FaLocationDot size={20} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="headerSearchInput w-full outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-1 py-1"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="relative flex items-center">
                  <CalendarDays className="headerIcon" />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="cursor-pointer"
                  >
                    {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                      dates[0].endDate,
                      "MM/dd/yyyy"
                    )}`}
                  </span>
                  {openDate && (
                    <div className="absolute top-full left-0 z-10">
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) =>
                          setDates([item.selection as CustomDateRange])
                        }
                        moveRangeOnFirstSelection={false}
                        ranges={dates}
                        className="date"
                        minDate={new Date()}
                      />
                    </div>
                  )}
                </div>
                <div className="relative flex flex-row items-center">
                  <FaPerson size={25} className="headerIcon" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="cursor-pointer"
                  >
                    {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                  </span>
                  {openOptions && (
                    <div className="absolute top-full left-0 z-10 flex flex-col w-48 bg-white shadow-lg rounded-md">
                      <div className="py-2 px-4 flex justify-between items-center border-b border-gray-200">
                        <span>Adult</span>
                        <div className="flex items-center">
                          <button
                            disabled={options.adult <= 1}
                            className="optionCounterButton bg-blue-500 text-white rounded"
                            onClick={() => handleOption("adult", "d")}
                          >
                            <Minus />
                          </button>
                          <span className="size-6 text-center">
                            {options.adult}
                          </span>
                          <button
                            className="optionCounterButton bg-blue-500 text-white rounded"
                            onClick={() => handleOption("adult", "i")}
                          >
                            <Plus />
                          </button>
                        </div>
                      </div>
                      <div className="py-2 px-4 flex justify-between items-center border-b border-gray-200">
                        <span>Children</span>
                        <div className="flex items-center">
                          <button
                            disabled={options.children <= 0}
                            className="optionCounterButton bg-blue-500 text-white rounded"
                            onClick={() => handleOption("children", "d")}
                          >
                            <Minus />
                          </button>
                          <span className="size-6 text-center">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterButton bg-blue-500 text-white rounded"
                            onClick={() => handleOption("children", "i")}
                          >
                            <Plus />
                          </button>
                        </div>
                      </div>
                      <div className="py-2 px-4 flex justify-between items-center">
                        <span>Room</span>
                        <div className="flex items-center">
                          <button
                            disabled={options.room <= 1}
                            className="optionCounterButton bg-blue-500 text-white rounded"
                            onClick={() => handleOption("room", "d")}
                          >
                            <Minus />
                          </button>
                          <span className="size-6 text-center">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterButton bg-blue-500 text-white rounded"
                            onClick={() => handleOption("room", "i")}
                          >
                            <Plus />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {data?.data.map((item: Hotel) => (
              <div
                className="bg-white rounded-lg shadow-md overflow-hidden"
                key={item._id}
              >
                <img
                  className="w-full h-40 object-cover object-center"
                  src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
                  alt="image-hotel"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{item?.name}</h2>
                  <p className="text-gray-600 mb-2 line-clamp-1 ">
                    {item.title}
                  </p>
                  <p className="text-gray-700 mb-4 line-clamp-2 ">
                    {item.desc}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-700">Rating: {item.rating}</p>
                    <p className="text-gray-700">Price: {item.cheapestPrice}</p>
                  </div>
                  <button
                    onClick={() => navigate(`/rooms/${item._id}`)}
                    className="mt-4 bg-[#0b0d1c] hover:bg-black text-white font-bold py-2 px-4 rounded"
                  >
                    Details Room
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Hotels;
