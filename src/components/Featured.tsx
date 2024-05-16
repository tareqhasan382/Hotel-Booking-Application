import { useFetchCountByCityQuery } from "../Redux/hotel/hotelApi";
import LoaderModal from "./Loader";

const Featured = () => {
  const cities = ["Metropolis", "Boutique", "New York City"];
  const { data, isLoading } = useFetchCountByCityQuery(cities);
  // console.log(data);
  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-2 grid-cols-1  w-full items-center justify-center  gap-4 mb-10  ">
      {isLoading ? (
        <div>
          <LoaderModal />
        </div>
      ) : (
        <>
          <div className=" relative overflow-hidden flex-1 rounded-md ">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className=" object-cover rounded-md transition-transform transform hover:scale-105 duration-300 "
            />
            <div className=" absolute bottom-4 left-4 md:bottom-10 md:left-10  text-white ">
              <h1 className=" lg:text-2xl text-xl font-extrabold ">New York</h1>
              <h2 className=" lg:text-2xl text-xl font-bold ">
                {data && data[0]} properties
              </h2>
            </div>
          </div>

          <div className=" relative overflow-hidden flex-1 rounded-md ">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className=" object-cover rounded-md transition-transform transform hover:scale-105 duration-300 "
            />
            <div className=" absolute bottom-4 left-4 md:bottom-10 md:left-10 text-white ">
              <h1 className=" lg:text-2xl text-xl font-extrabold ">Boston</h1>
              <h2 className=" lg:text-2xl text-xl font-bold ">
                {data && data[1]} properties
              </h2>
            </div>
          </div>
          <div className=" relative overflow-hidden flex-1 rounded-md ">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className=" object-cover rounded-md transition-transform transform hover:scale-105 duration-300 "
            />
            <div className=" absolute bottom-4 left-4 md:bottom-10 md:left-10 text-white ">
              <h1 className=" lg:text-2xl text-xl font-extrabold ">Chicago</h1>
              <h2 className=" lg:text-2xl text-xl font-bold ">
                {data && data[2]} properties
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
