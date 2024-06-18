import { useEffect, useState, useContext } from "react";
import Product from "./Product";
import MainContent from "./MainContent";
import Abouthome from "./Abouthome";
import { MyContext } from "./context/Mycontext";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { slides } = useContext(MyContext);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);
  


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section >
        <div className="max-w-2xl pt-20 mx-auto">
          <div className="relative" data-carousel="static">
            <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute top-1/2 left-1/2 w-full transition-transform duration-700 ease-in-out ${
                    index === activeIndex ? "block" : "hidden"
                  }`}
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  {slide.text && (
                    <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl">
                      {slide.text}
                    </span>
                  )}
                  <img
                    src={slide.src}
                    className="block w-full"
                    alt={slide.alt}
                  />
                </div>
              ))}
            </div>
            <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? "bg-white" : "bg-gray-300"
                  }`}
                  aria-current={index === activeIndex}
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                ></button>
              ))}
            </div>
            <button
              type="button"
              className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
              onClick={prevSlide}
            >
              <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                <svg
                  className="w-5 h-5 text-white sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <span className="hidden">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
              onClick={nextSlide}
            >
              <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
                <svg
                  className="w-5 h-5 text-white sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <span className="hidden">Next</span>
              </span>
            </button>
          </div>

          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            suscipit, minima delectus consectetur deleniti id nam maxime ipsum
            praesentium voluptatum doloremque, sed consequatur? Quos obcaecati a
            ducimus, at dolore reprehenderit.{" "}
            <a
              className="text-blue-400 hover:underline"
              href="https://flowbite.com/docs/getting-started/introduction/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flowbite Documentation
            </a>
            .
          </p>
        </div>
      </section>
      <MainContent />
      <Product />
      <Abouthome />
      <section className="bg-white">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="mt-12 md:mt-0">
              <img
                src="https://img.freepik.com/premium-vector/delivery-food-boy-handing-package-food-with-seeing-customer-mobile-phone-food-ordering_420121-293.jpg"
                alt="About Us Image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="max-w-lg">
              <p className="mt-4 text-gray-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis eros at lacus feugiat hendrerit sed ut tortor. Suspendisse
                et magna quis elit efficitur consequat. Mauris eleifend velit a
                pretium iaculis. Donec sagittis velit et magna euismod, vel
                aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum
                arcu volutpat vel.
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more about us <span className="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
