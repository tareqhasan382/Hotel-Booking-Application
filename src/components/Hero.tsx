import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    id: 1,
    name: "Upto 50% off on all Men's Wear",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "http://www.pngall.com/wp-content/uploads/5/Hotel-Building-PNG-Image-File.png",
  },
  {
    id: 2,
    name: "Upto 50% off on all Men's Wear",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    img: "http://www.pngall.com/wp-content/uploads/5/Hotel-Building-PNG-Image-File.png",
  },
  {
    id: 3,
    name: "Upto 50% off on all Men's Wear",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "http://www.pngall.com/wp-content/uploads/5/Hotel-Building-PNG-Image-File.png",
  },
  {
    id: 5,
    name: "Upto 50% off on all Men's Wear",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "http://www.pngall.com/wp-content/uploads/5/Hotel-Building-PNG-Image-File.png",
  },
];

const Hero: React.FC = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex lg:justify-center lg:items-center dark:bg-gray-950 dark:text-white duration-200  ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-rose-400 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0 ">
        <Slider {...settings}>
          {data.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className=" lg:pl-5 flex flex-col w-[90%] justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 className=" lg:text-7xl text-4xl lg:text-heading1-bold text-heading3-bold  font-bold lg:pl-5 px-2 lg:text-left text-center  ">
                    {data.name}
                  </h1>
                  <p className=" text-justify lg:pl-5 px-2 ">{data.text}</p>
                  <div className=" flex flex-col items-center justify-center ">
                    <button className=" bg-gradient-to-r bg-black from-gray-500 to-black hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2 px-2 pt-10 lg:pt-0 overflow-hidden ">
                  <div>
                    <img
                      src={data.img}
                      alt="banner"
                      className=" w-[90%] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
