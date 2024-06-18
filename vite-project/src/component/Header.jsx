import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [select, setSelect] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-wrap place-items-center fixed z-50 bg-white shadow w-full">
      <section className="relative mx-auto w-full">
        <nav className="flex justify-between w-full px-6  py-4">
          <div className="xl:px-12 flex w-full h-9 items-center">
            <Link className="text-3xl font-bold font-heading" to="/">
              <img className="w-36" src="public\logo.png" alt="Logo" />
            </Link>
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-8">
              {[
                { value: "Home", path: "/" },
                { value: "Shop", path: "/shop" },
                { value: "Contact", path: "/contact" },
                { value: "About", path: "/aboutus" },
                { value: "Login", path: "/login" },
              ].map((item, index) => (
                <li key={index} onClick={() => window.scrollTo(0, 0)}>
                  <Link
                    onClick={() => setSelect(index)}
                    className={
                      select === index ? "text-red-900" : "hover:text-gray-500"
                    }
                    to={item.path}
                  >
                    {item.value}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden xl:flex items-center space-x-5">
              <Link to="/favorites" className="hover:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </Link>
              <Link
                to="/addcard"
                className="flex items-center hover:text-gray-200"
              >
                <svg   
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                </span>
              </Link>
              <Link
                to="/profile"
                className="flex items-center hover:text-gray-200"
              >
                <img className="w-10 rounded-2xl"  src="public\profileimage.png" alt="" />
              </Link>
            </div>
          </div>
          <button
            className="xl:hidden flex items-center"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
        {isMobileMenuOpen && (
          <>
            <ul
              className="md:hidden flex flex-col px-4 text-center py-2 mx-auto font-semibold font-heading space-y-4 transition-transform transform duration-300 ease-in-out bg-white shadow-lg rounded-md mt-2"
              style={{
                transform: isMobileMenuOpen
                  ? "translateY(0)"
                  : "translateY(-200%)",
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
            >
              {[
                { value: "Home", path: "/" },
                { value: "Shop", path: "/shop" },
                { value: "Contact", path: "/contact" },
                { value: "About", path: "/aboutus" },
                { value: "Login", path: "/login" },
              ].map((item, index) => (
                <>
                  <li key={index}>
                    <Link
                      onClick={() => {
                        setSelect(index);
                        toggleMobileMenu();
                      }}
                      className={
                        select === index
                          ? "text-red-900"
                          : "hover:text-gray-500"
                      }
                      to={item.path}
                    >
                      {item.value}
                    </Link>
                  </li>
                </>
              ))}
              <div className="w-full text-center items-center justify-end  mt-4">
                <Link
                  to="/addcard"
                  className="flex  w-full text-center  justify-center items-center hover:text-gray-200   "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </Link>
              </div>
            </ul>
          </>
        )}
      </section>
    </div>
  );
};

export default Header;
