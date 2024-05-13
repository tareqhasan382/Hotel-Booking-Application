// import useFetch from "../../hooks/useFetch";

const Featured = () => {
  //   const { data, loading, error } = useFetch(
  //     "/hotels/countByCity?cities=berlin,madrid,london"
  //   );
  // grid lg:grid-cols-3 grid-cols-1
  return (
    <div className=" flex lg:flex-row flex-col w-[100%] items-center justify-center z-1  gap-4 lg:p-8 py-6  ">
      <>
        <div className=" relative overflow-hidden flex-1 rounded-md ">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
            alt=""
            className=" rounded-md "
          />
          <div className=" absolute bottom-10 left-10 text-white ">
            <h1 className=" lg:text-2xl text-xl font-extrabold ">Berlin</h1>
            <h2 className=" lg:text-2xl text-xl font-bold ">120 properties</h2>
          </div>
        </div>

        <div className=" relative overflow-hidden flex-1 rounded-md ">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
            alt=""
            className=" rounded-md "
          />
          <div className=" absolute bottom-10 left-10 text-white ">
            <h1 className=" lg:text-2xl text-xl font-extrabold ">Madrid</h1>
            <h2 className=" lg:text-2xl text-xl font-bold ">130 properties</h2>
          </div>
        </div>
        <div className=" relative overflow-hidden flex-1 rounded-md ">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
            alt=""
            className=" rounded-md "
          />
          <div className=" absolute bottom-10 left-10 text-white ">
            <h1 className=" lg:text-2xl text-xl font-extrabold ">London</h1>
            <h2 className=" lg:text-2xl text-xl font-bold ">140 properties</h2>
          </div>
        </div>
      </>
    </div>
  );
};

export default Featured;
