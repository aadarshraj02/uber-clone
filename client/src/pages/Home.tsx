import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaArrowRight } from "react-icons/fa";

const Home = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-full lg:mt-32 mt-24 lg:px-16 px-5 flex flex-col lg:flex-row lg:justify-between sm:mb-5">
        <div className="order-3 lg:order-1 w-full lg:w-1/2">
          <h2 className="xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-4xl tracking-tight leading-tight">
            Go <br /> Anywhere with Uber
          </h2>
          <div className="w-full flex items-center justify-center lg:mt-16 mt-8">
            <button className="text-white bg-black lg:w-1/2 w-full flex items-center justify-center gap-2 py-3 rounded-full hover:opacity-70 transition-opacity ease-linear duration-300 ">
              Continue <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="order-1 lg:order-2 w-full lg:w-1/2">
          <img src="./fleet-management.jpg" alt="" className="w-full" />
        </div>
      </div>
      <div className="min-h-screen w-full  lg:px-16 px-5 flex flex-col lg:flex-row lg:justify-between">
        <div className="order-3 lg:order-5 w-full lg:w-1/2 lg:ml-20">
          <h2 className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl tracking-tight leading-tight">
          Drive when you want, make what you need
          </h2>
          <p className="lg:my-10 my-4 lg:w-3/4 w-full text-sm">Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.</p>
          <div className="w-full flex items-center justify-center lg:mt-16 my-8">
            <button className="text-white bg-black lg:w-1/2 w-full flex items-center justify-center gap-2 py-3 rounded-full hover:opacity-70 transition-opacity ease-linear duration-300">
              Get Started <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="order-1 lg:order-2 w-full lg:w-1/2">
          <img src="../../public/earner-illustra.jpg" alt="" className="w-full" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
