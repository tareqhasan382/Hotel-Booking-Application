import { useFetchCountByTypeQuery } from "../Redux/hotel/hotelApi";
import LoaderModal from "./Loader";

interface Property {
  type: string;
  count: number;
}

const PropertyList = () => {
  const { data, isLoading } = useFetchCountByTypeQuery(undefined);

  const images = [
    "https://i.ibb.co/mJscrcn/976239.jpg",
    "https://i.ibb.co/m4d7qHJ/th.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];

  return (
    <div className="w-full grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 justify-between gap-10">
      {isLoading ? (
        <LoaderModal />
      ) : (
        <>
          {data &&
            data?.map((property: Property, i: number) => (
              <div
                className="flex-1 rounded-md overflow-hidden cursor-pointer"
                key={i}
              >
                <div className="w-full h-[150px] overflow-hidden">
                  <img
                    src={images[i]}
                    alt="List-Titles"
                    className="object-cover transition-transform transform hover:scale-110 duration-300"
                  />
                </div>
                <div className="pListTitles">
                  <h1 className="font-bold capitalize">{property.type}</h1>
                  <h2 className="font-medium">
                    {property.count} {property.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
