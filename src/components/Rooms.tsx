import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useHotelRoomsQuery } from "../Redux/hotel/hotelApi";
import LoaderModal from "./Loader";
import Gallary from "./Gallary";
import { FaBath, FaBed, FaTv, FaUserFriends, FaWifi } from "react-icons/fa";
import { FaCity, FaHouse, FaLocationDot } from "react-icons/fa6";
import { AirVent, Dumbbell, VolumeX } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format, differenceInDays } from "date-fns";
import { GiVibratingShield } from "react-icons/gi";
import { toast } from "react-toastify";
import { useBookingMutation } from "../Redux/booking/bookingApi";
import axios from "axios";
import { BASEURL } from "../Redux/api/baseApi";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";

interface Room {
  _id: string;
  title: string;
  desc: string;
  price: number;
  image: string[];
  bedCount: number;
  guestCount: number;
  bathroomCount: number;
  breakFastPrice: number;
  roomService: boolean;
  TV: boolean;
  balcony: boolean;
  freeWifi: boolean;
  airCondition: boolean;
  soundProofed: boolean;
  unavailableDates: Date[];
}

export interface CustomDateRange {
  startDate: Date;
  endDate: Date;
  key: string;
}

const Rooms = () => {
  const navgate = useNavigate();
  const session = useSelector((state: RootState) => state.auth);
  const [openDate, setOpenDate] = useState<string | null>(null);
  const [checkDate, setCheckDate] = useState<number | null>(null);
  const [roomData, setRoomData] = useState<Room>();

  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useHotelRoomsQuery(id);

  const disabledDates = roomData?.unavailableDates;

  const [booking, { isLoading: bookingLoading }] = useBookingMutation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState<CustomDateRange[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [dates, setDates] = useState<{ [key: string]: CustomDateRange[] }>({});
  const [totalDays, setTotalDays] = useState<{ [key: string]: number }>({});
  const handleOpenDate = (roomId: string) => {
    setOpenDate(openDate === roomId ? null : roomId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (openDate) {
          axios
            .get(`${BASEURL}/singleRoom/${openDate}`)
            .then((response) => setRoomData(response?.data?.data));
        }
      } catch (error) {
        console.error("Error fetching room data:", error);
      }
    };

    fetchData();
  }, [openDate]);

  const handleDateChange = (roomId: string, range: CustomDateRange[]) => {
    setDateRange(range);
    setDates((prevDates) => ({
      ...prevDates,
      [roomId]: range,
    }));

    setOpenDate(roomId);
    const { startDate, endDate } = range[0];
    const days = differenceInDays(endDate, startDate) + 1;
    setCheckDate(days);
    setTotalDays((prevTotalDays) => ({
      ...prevTotalDays,
      [roomId]: days,
    }));
  };
  const alldates = {
    startDate: format(dateRange[0].startDate, "MM/dd/yyyy"),
    endDate: format(dateRange[0].endDate, "MM/dd/yyyy"),
  };

  const handleBook = async (room: Room) => {
    if (!session?.user && id) {
      localStorage.setItem("roomId", id);
      return navgate("/login");
    }

    try {
      if (checkDate === null || !checkDate) {
        return toast.warning("Select days!");
      }
      const data = {
        dates: alldates,
        totalPrice: room.price * totalDays[room._id],
        room: room._id,
      };
      const result = await booking(data);
      if (result?.data.status) {
        toast.success("Booking Successfully!");
      } else {
        toast.error("Booking Foeld!");
      }
      // console.log("result:", result);
    } catch (error) {
      return toast.error("Booking Foeld!");
    }
    //checkInDate , checkOutDate , totalPrice , room
  };
  return (
    <div className="container mx-auto px-4 py-8">
      {isLoading ? (
        <LoaderModal />
      ) : (
        <div>
          <div className="mb-8 w-full flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2 rounded-lg overflow-hidden">
              <Gallary Media={data?.photos} />
            </div>
            <div className="w-full sm:w-1/2">
              <h1 className="text-3xl font-semibold mb-2">
                <span className="font-bold">{data?.name}</span>
              </h1>
              <p className="text-gray-600 mb-2">
                Type: <span className="font-bold">{data?.type}</span>
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">{data?.title}</span>
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">{data?.desc}</span>
              </p>
              <p className="text-gray-600 mb-2 flex items-center ">
                <FaCity size={25} />{" "}
                <span className="font-bold px-1 ">{data?.city}</span>
              </p>
              <p className="text-gray-600 mb-2 flex items-center">
                <FaLocationDot size={20} />{" "}
                <span className="font-bold">{data?.address}</span>
              </p>
              <p className="text-gray-600 mb-2 flex items-center ">
                <GiVibratingShield size={25} />{" "}
                <span className="font-bold">{data?.rating}</span>
              </p>
              <p className="text-gray-600 mb-2 flex items-center">
                <Dumbbell />
                <span className="font-bold">
                  {data?.gym ? "Available" : "Unavailable"}
                </span>
              </p>
              <p className="text-gray-600 mb-2">
                Featured:{" "}
                <span className="font-bold">
                  {data?.featured ? "Yes" : "No"}
                </span>
              </p>
              <p className="text-gray-600 mb-2">
                Distance from city center:{" "}
                <span className="font-bold">{data?.distance}</span>
              </p>
              <p className="text-gray-600 mb-2">
                Cheapest Price: $
                <span className="font-bold">{data?.cheapestPrice}</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data?.rooms.map((room: Room) => (
              <div
                key={room._id}
                className="bg-white rounded-lg shadow-md relative"
              >
                <Gallary
                  h="w-full h-40 object-cover object-center cursor-pointer"
                  Media={room.image}
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2  ">{room.title}</h2>
                  <p className="text-gray-600 mb-2 line-clamp-3">{room.desc}</p>
                  <div className="w-full flex flex-row justify-between">
                    <div className="font-semibold">
                      <p className="text-gray-700 mb-2 flex items-center">
                        <FaUserFriends />
                        <span className="px-1">{room.guestCount} </span>Guest(s)
                      </p>
                      <p className="text-gray-700 mb-2 flex items-center">
                        <FaBed />
                        <span className="px-1">{room.bedCount}</span> Bed(s)
                      </p>
                      <p className="text-gray-700 mb-2 flex items-center">
                        <FaBath />
                        <span className="px-1">{room.bathroomCount}</span>{" "}
                        Bathroom(s)
                      </p>
                      <p className="text-gray-700 mb-2 flex items-center">
                        <FaTv />
                        <span className="px-1">{room.TV ? " TV" : " NO"}</span>
                      </p>
                    </div>
                    <div className="font-semibold">
                      <p className="text-gray-700 mb-2 flex items-center">
                        <AirVent />
                        <span className="px-1">
                          {room.airCondition ? "AirCondition" : "NO"}
                        </span>
                      </p>
                      <p className="text-gray-700 mb-2 flex items-center">
                        <VolumeX />
                        <span className="px-1">
                          {room.soundProofed ? "soundProofed" : "NO"}
                        </span>
                      </p>
                      <p className="text-gray-700 mb-2 flex items-center">
                        <FaHouse />
                        <span className="px-1">
                          {room.balcony ? "Balcony" : "NO"}
                        </span>
                      </p>
                      <p className="text-gray-700 mb-2 flex items-center">
                        <FaWifi />
                        <span className="px-1">
                          {room.freeWifi ? " FreeWifi" : " NO"}
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 my-2">
                    <span className="font-semibold">Room Price:</span>
                    <span className="font-bold">${room.price}</span> /24hrs
                  </p>
                  <div className=" w-full ">
                    <small>Select days that you will spend in this room?</small>
                    <div className="relative w-full flex flex-row items-center">
                      <div
                        onClick={() => handleOpenDate(room._id)}
                        className=" px-2 cursor-pointer w-full outline outline-2 outline-black rounded-md h-10 flex items-center "
                      >
                        <CalendarDays className="headerIcon" />
                        <span
                          onClick={() => handleOpenDate(room._id)}
                          className="cursor-pointer pl-2 "
                        >
                          {dates[room._id]
                            ? `${format(
                                dates[room._id][0].startDate,
                                "MM/dd/yyyy"
                              )} to ${format(
                                dates[room._id][0].endDate,
                                "MM/dd/yyyy"
                              )}`
                            : "Select Dates"}
                        </span>
                      </div>
                      {openDate === room._id && (
                        <div className="absolute w-full top-full z-10 mt-2 bg-white border rounded-lg shadow-lg">
                          <DateRange
                            editableDateInputs={true}
                            onChange={(item) =>
                              handleDateChange(room._id, [
                                item.selection as CustomDateRange,
                              ])
                            }
                            moveRangeOnFirstSelection={false}
                            ranges={
                              dates[room._id] || [
                                {
                                  startDate: new Date(),
                                  endDate: new Date(),
                                  key: "selection",
                                },
                              ]
                            }
                            className="date"
                            minDate={new Date()}
                            disabledDates={disabledDates}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <h3 className="text-gray-700 my-3">
                    <span className="font-semibold">Total Price: </span>
                    <span className="font-bold">
                      $ {room.price * (totalDays[room._id] || 1)}
                    </span>{" "}
                    for{" "}
                    <span className=" font-bold ">
                      {totalDays[room._id]} Days
                    </span>
                  </h3>
                  <div className="w-full flex justify-center items-center">
                    <button
                      onClick={() => handleBook(room)}
                      disabled={bookingLoading}
                      className={`${
                        bookingLoading
                          ? " bg-slate-500 opacity-60 w-full  text-white font-bold py-3 rounded"
                          : "bg-[#0b0d1c] hover:bg-black w-full  text-white font-bold py-3 rounded"
                      }`}
                    >
                      {bookingLoading ? "Loading" : "Reserve or Book Now!"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedImage && (
            <div
              className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
              onClick={() => setSelectedImage(null)}
            >
              <img
                className="max-w-full max-h-full"
                src={selectedImage}
                alt="Image"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Rooms;
