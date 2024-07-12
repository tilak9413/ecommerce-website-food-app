import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaApple } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const [errordata, setErrordata] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setErrordata({});
      try {
        const response = await axios.post(
          "http://localhost:8001/login",
          formdata
        );
        navigate("/");
      } catch (error) {
        console.error("Error:", error.response.data);
        setErrordata({ form: error.response.data.message });
      }
    } else {
      setErrordata(validationErrors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formdata.email) {
      errors.email = "Email is required";
    }
    if (!formdata.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center justify-center shadow-lg rounded-lg bg-white overflow-hidden w-full max-w-4xl">
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://i.pinimg.com/236x/05/41/6b/05416ba0b100e466f35ed3b96befe1dd.jpg"
            alt="Food"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <div className="flex justify-center mb-4">
            <img className="h-16 w-16" src="public/image.png" alt="Logo" />
          </div>
          <h3 className="text-red-600 text-2xl text-center mb-4">
            Log into your account
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formdata.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Enter Email"
              />
              {errordata.email && (
                <span className="text-red-500 text-sm">{errordata.email}</span>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formdata.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="******"
              />
              {errordata.password && (
                <span className="text-red-500 text-sm">
                  {errordata.password}
                </span>
              )}
              {errordata.form && (
                <span className="text-red-500 text-sm">{errordata.form}</span>
              )}
            </div>
            <div className="flex justify-between mb-4">
              <a href="#" className="text-blue-500 text-sm">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg"
            >
              Login
            </button>
          </form>
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-4">
              <FaFacebook className="text-blue-600" size={24} />
              <FaInstagram className="text-pink-600" size={24} />
              <FaApple className="text-black" size={24} />
            </div>
            <div>
              <Link to="/register" className="text-blue-500 underline">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
