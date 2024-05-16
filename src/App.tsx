import "./index.css";
import Testimonials from "./components/Testimonials";
import Featured from "./components/Featured";
import PropertyList from "./components/PropertyList";
import FeaturedProperties from "./components/FeaturedProperties";
import Hero from "./components/Hero";
import Container from "./components/Container";

function App() {
  return (
    <div className="bg-white  -top-1 dark:bg-gray-900 dark:text-white duration-200 relative overflow-hidden ">
      <Container>
        <Hero />
        <div>
          <h1 className=" lg:text-2xl text-xl font-bold  py-5">
            Popular Hotels
          </h1>
          <Featured />
        </div>
        <div className=" mb-10 ">
          <h1 className=" lg:text-2xl text-xl font-bold  py-5">
            Browse by property type
          </h1>
          <PropertyList />
        </div>
        <div>
          <h1 className=" lg:text-2xl text-xl font-bold  py-5">
            Home Guests Love
          </h1>
          <FeaturedProperties />
        </div>
      </Container>
      {/* <Header /> */}
      <div className=" overflow-hidden lg:px-20 px-2 flex flex-col gap-10 "></div>
      <Testimonials />
    </div>
  );
}

export default App;
