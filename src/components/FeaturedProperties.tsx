/* eslint-disable @typescript-eslint/no-explicit-any */

import { useFetchHotelsQuery } from "../Redux/hotel/hotelApi";
import LoaderModal from "./Loader";

const FeaturedProperties = () => {
  //   const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  const query = {
    featured: true,
    limit: 4,
  };

  const { data, isLoading } = useFetchHotelsQuery(query);

  // const images = [
  //   "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
  //   "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
  //   "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
  //   "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
  //   "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  // ];
  return (
    <div className=" w-[100%] flex lg:flex-row flex-col justify-between gap-10 px-8 mb-10 ">
      <>
        {isLoading ? (
          <LoaderModal />
        ) : (
          <>
            {data?.data.map((item: any) => (
              <div
                key={item._id}
                className=" flex-1 rounded-t-md overflow-hidden cursor-pointer "
              >
                <img
                  src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
                  alt=""
                  className=" w-[100%] h-[150px] object-cover "
                />
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
