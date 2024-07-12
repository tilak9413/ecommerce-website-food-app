import { useEffect, useState, useContext } from "react";
import Product from "./Product";
import MainContent from "./MainContent";
import Abouthome from "./Abouthome";
import { MyContext } from "./context/Mycontext";
import GetApp from "./Getapp";

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
      {/* <section >
        <div className="max-w-2xl  pt-40 mx-auto">
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
      </section> */}
      <div className="relative bg-imagehero min-h-screen flex items-center justify-center">
        <div className="relative w-full">
          <div className="absolute inset-0">
            <img
              src="https://b.zmtcdn.com/web/small/963036be03420f1bbc0c94f6f7991b8e1587804874.jpeg"
              className="w-full h-full object-cover"
              alt="Low Res"
            />
          </div>
          <img
            src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
            className="absolute inset-0 w-full h-full object-cover"
            alt="High Res"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center text-white mb-4">
            Discover the best food &amp; drinks in{" "}
            <span className="block">Surat</span>
          </h1>
          <div className="relative flex items-center w-full max-w-2xl p-3 bg-white rounded-full shadow-lg overflow-hidden">
            <div className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FF7E8B"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                aria-labelledby="location-fill"
                role="img"
                className="sc-rbbb40-0 iRDDBk"
              >
                <title>location-fill</title>
                <path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path>
              </svg>
            </div>
            <input
              placeholder="Surat"
              className="appearance-none bg-transparent border-none w-28 text-black py-2 px-2 leading-tight focus:outline-none"
              spellCheck="false"
            />
            <i className="text-gray-500 ml-2 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#4F4F4F"
                width="12"
                height="12"
                viewBox="0 0 20 20"
                aria-labelledby="down-triangle"
                role="img"
                className="sc-rbbb40-0 ezrcri"
              >
                <title>down-triangle</title>
                <path d="M20 5.42l-10 10-10-10h20z"></path>
              </svg>
            </i>
            <div className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#828282"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                aria-labelledby="search"
                role="img"
                className="sc-rbbb40-0 iwHbVQ"
              >
                <title>Search</title>
                <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path>
              </svg>
            </div>
            <input
              placeholder="Search for restaurant, cuisine or a dish"
              className="appearance-none bg-transparent border-none w-full text-black py-2 px-2 leading-tight focus:outline-none"
              spellCheck="false"
            />
          </div>
        </div>
      </div>

      <MainContent />
      <Product />
      <Abouthome />
        <GetApp/>
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
