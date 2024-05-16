import { useNavigate } from "react-router-dom";
import { useMyOrdersQuery } from "../Redux/booking/bookingApi";
import Container from "./Container";
import LoaderModal from "./Loader";
import { RootState } from "../Redux/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const MyOrders: React.FC = () => {
  const { data, isLoading } = useMyOrdersQuery();
  const navgate = useNavigate();
  const session = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (!session?.user) {
      navgate("/");
    }
  }, [session, navgate]);
  return (
    <>
      <Container>
        <div className=" w-full pb-12 lg:px-5 ">
          {isLoading && <LoaderModal />}
          <div className=" w-full ">
            <h1 className="text-3xl my-8 text-center font-bold">My Orders</h1>
            <div className=" w-full flex flex-col items-center ">
              {data?.data?.length ? (
                <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data?.data.map((order) => (
                    <div
                      key={order._id}
                      className="border rounded-lg p-4 shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      <h2 className="text-xl font-bold">{order.room.title}</h2>
                      <p className=" text-lg font-bold">
                        Room Number: {order.room.roomNumber}
                      </p>
                      <p>
                        <strong>Check-In Date:</strong>{" "}
                        {new Date(order.checkInDate).toLocaleDateString()}
                      </p>
                      <p>
                        <strong>Check-Out Date:</strong>{" "}
                        {new Date(order.checkOutDate).toLocaleDateString()}
                      </p>
                      <p>
                        <strong>Total Price:</strong> ${order.totalPrice}
                      </p>
                      <p>
                        <strong>Status:</strong> {order.status}
                      </p>
                      {/* Add more details if need user informstion and Hotels Hotels */}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="  items-center h-72 text-center text-gray-500">
                  <div>
                    <h1 className="text-xl font-bold">No Orders Found</h1>
                    <p className="mt-2">
                      Looks like your orders list is lonely.
                    </p>
                    <p>Why not add more orders and enjoy your stay!</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default MyOrders;
