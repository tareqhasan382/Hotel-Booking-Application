import React, { useState } from "react";
import { DateRange, DateRangeProps } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { FaCar, FaPerson } from "react-icons/fa6";
import { CalendarDays, Minus, Plus } from "lucide-react";
interface HeaderProps {
  type?: string;
}

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
// import "./header.css";
const Header: React.FC<HeaderProps> = () => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState<Options>({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name: keyof Options, operation: "i" | "d") => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1,
    }));
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-[#0b0d1c] text-white rounded-b  py-10">
      <div className="my-10 flex flex-col gap-6 ">
        <h1 className="text-2xl font-bold  px-2 ">
          A lifetime of discounts? It's Genius.
        </h1>
        <p className="headerDesc lg:text-left text-justify px-2 ">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
      </div>

      <div className="bg-white text-black lg:py-1 py-4 rounded-md pl-2 lg:mx-10 mx-3 lg:h-10 md:h-48 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="grid lg:grid-cols-3 gap-4 my-2">
          <div className="flex items-center gap-1 ">
            <FaCar size={20} className="headerIcon" />
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
            >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
              dates[0].endDate,
              "MM/dd/yyyy"
            )}`}</span>
            {openDate && (
              <div className="absolute top-full left-0 z-10">
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) =>
                    setDates([item.selection as CustomDateRange])
                  }
                  moveRangeOnFirstSelection={false}
                  ranges={dates as DateRangeProps["ranges"]}
                  className="date"
                  minDate={new Date()}
                />
              </div>
            )}
          </div>
          <div className="relative flex flex-row items-center ">
            <FaPerson size={25} className="headerIcon" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="cursor-pointer"
            >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
            {openOptions && (
              <div className="absolute top-full left-0 z-10 flex flex-col w-48 bg-white shadow-lg rounded-md">
                <div className="py-2 px-4 flex justify-between items-center border-b border-gray-200">
                  <span>Adult</span>
                  <div className="flex items-center">
                    <button
                      disabled={options.adult <= 1}
                      className=" optionCounterButton bg-blue-500 text-white rounded "
                      onClick={() => handleOption("adult", "d")}
                    >
                      <Minus />
                    </button>
                    <span className=" size-6 text-center ">
                      {options.adult}
                    </span>
                    <button
                      className=" optionCounterButton bg-blue-500 text-white rounded "
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
                      className=" optionCounterButton bg-blue-500 text-white rounded "
                      onClick={() => handleOption("children", "d")}
                    >
                      <Minus />
                    </button>
                    <span className=" size-6 text-center ">
                      {options.children}
                    </span>
                    <button
                      className=" optionCounterButton bg-blue-500 text-white rounded "
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
                      className=" optionCounterButton bg-blue-500 text-white rounded "
                      onClick={() => handleOption("room", "d")}
                    >
                      <Minus />
                    </button>
                    <span className=" size-6 text-center ">{options.room}</span>
                    <button
                      className=" optionCounterButton bg-blue-500 text-white rounded "
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
        <div className="">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
