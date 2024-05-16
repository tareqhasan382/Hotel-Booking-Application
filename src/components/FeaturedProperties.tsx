import { Hotel, useFetchHotelsQuery } from "../Redux/hotel/hotelApi";
import LoaderModal from "./Loader";

const FeaturedProperties = () => {
  const query = {
    featured: true,
    limit: 4,
  };

  const { data, isLoading } = useFetchHotelsQuery(query);

  return (
    <div className=" w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-between gap-10 mb-10 ">
      <>
        {isLoading ? (
          <LoaderModal />
        ) : (
          <>
            {data?.data.map((item: Hotel) => (
              <div
                key={item._id}
                className=" flex-1 rounded-t-md overflow-hidden cursor-pointer "
              >
                <div className="w-full h-[150px] overflow-hidden ">
                  <img
                    src={item.photos[0]}
                    alt=""
                    className="  object-cover transition-transform transform hover:scale-105 duration-300 "
                  />
                </div>
                <div className="pListTitles">
                  <h1 className=" font-bold ">{item?.name}</h1>
                  <h2 className=" font-medium ">{item?.city}</h2>
                  <h3 className=" font-bold ">
                    Starting from ${item?.cheapestPrice}
                  </h3>
                  <div className=" my-2 ">
                    <span className=" p-1 bg-gray-950 text-white font-semibold ">
                      8.9
                    </span>
                    Excellent
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </>
    </div>
  );
};

export default FeaturedProperties;
