/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useParams } from "react-router-dom";
import { DateRange } from "react-date-range";
import { useGetRoomQuery } from "../Redux/room/roomApi";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";

interface Room {
  _id: string;
  number: number;
  unavailableDates: string[];
}

interface RoomData {
  _id: string;
  title: string;
  desc: string;
  price: number;
  roomNumbers: Room[];
}

interface CustomDateRange {
  startDate: Date;
  endDate: Date;
}

const Reserve: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetRoomQuery(id);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [dates, setDates] = useState<CustomDateRange[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
    },
  ]);
  const [openDate, setOpenDate] = useState(false);

  const handleRoomSelect = (room: Room) => {
    setSelectedRoom(room);
  };

  const handleConfirm = () => {
    if (selectedRoom && dates.length === 1) {
      const data = {
        room: selectedRoom.number,
        startDate: format(dates[0].startDate, "MM/dd/yyyy"),
        endDate: format(dates[0].endDate, "MM/dd/yyyy"),
      };
      console.log("data:", data);
      alert(
        `Room ${selectedRoom.number} booked from ${format(
          dates[0].startDate,
          "MM/dd/yyyy"
        )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`
      );
    } else {
      alert("Please select a room and valid dates");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 text-black">
      <h1 className="text-2xl font-semibold mb-4 text-center">Reserve</h1>
      {isLoading ? (
        <div className="text-center text-lg font-semibold">Loading...</div>
      ) : (
        <div className=" w-full items-center  flex flex-col ">
          <h1 className="text-2xl font-semibold mb-4">{data.data.title}</h1>
          {/* <p className="text-gray-600 mb-6">{data.data.desc}</p> */}
          <div className=" flex lg:flex-row flex-col gap-4">
            {data?.data.roomNumbers?.map((room: any) => (
              <button
                key={room._id}
                className={`p-4 rounded-lg border ${
                  room.unavailableDates.length > 0
                    ? "bg-gray-300 cursor-not-allowed text-black"
                    : "bg-white hover:bg-gray-100 text-black"
                }`}
                onClick={() => handleRoomSelect(room)}
                disabled={room.unavailableDates.length > 0}
              >
                <div className="text-lg font-semibold text-black">
                  Room {room.number}
                </div>
                <div className="text-sm text-gray-500">
                  Price: ${data.data.price}
                </div>
                <div className="text-sm text-gray-500">
                  {room.unavailableDates.length > 0 ? "Unavailable Dates" : ""}
                </div>
              </button>
            ))}
          </div>
          <div className="mt-8  items-center justify-center mx-auto ">
            <h2 className="text-lg font-semibold mb-4">Select Dates</h2>
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
          </div>
          <div className="mt-8  ">
            Selected Room:{" "}
            {selectedRoom ? `Room ${selectedRoom.number}` : "None"}
          </div>
          <button
            onClick={handleConfirm}
            className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
};

export default Reserve;
