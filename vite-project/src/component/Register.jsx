import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [errorData, setErrorData] = useState({});
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:8001/register",
          formData
        );
        // console.log(response.data.token);
        localStorage.setItem(response.data.token);
        navigate("/");
      } catch (error) {
        setErrorData({ form: error.response.data.message });
      }
    } else {
      setErrorData(validationErrors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }
    if (!formData.confirm.trim()) {
      errors.confirm = "Confirm password is required";
    } else if (formData.password !== formData.confirm) {
      errors.confirm = "Passwords do not match";
    }
    return errors;
  };

  return (
    <div className="flex items-center justify-center p-28 bg-gray-100 ">
      <div className="flex items-center justify-center shadow-lg rounded-lg h-5/6 max-h-full md:max-h-screen bg-white overflow-hidden w-full max-w-4xl">
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://i.pinimg.com/236x/05/41/6b/05416ba0b100e466f35ed3b96befe1dd.jpg"
            alt="Food"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <div className="flex justify-center mb-4">
            <img className="h-16 w-16" src="public/logo.png" alt="Logo" />
          </div>
          <h3 className="text-red-600 text-2xl text-center mb-4">
            Register your account
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="block text-gray-700 mb-2">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Enter Username"
              />
              {errorData.username && (
                <span style={{ fontSize: "12px" }} className="text-red-500 ">
                  {errorData.username}
                </span>
              )}
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Enter Email"
              />
              {errorData.email && (
                <span className="text-red-500 ">{errorData.email}</span>
              )}
              {errorData.form && (
                <span className="text-red-500 ">{errorData.form}</span>
              )}
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="******"
              />
              {errorData.password && (
                <span style={{ fontSize: "12px" }} className="text-red-500 ">
                  {errorData.password}
                </span>
              )}
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm"
                value={formData.confirm}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Confirm Password"
              />
              {errorData.confirm && (
                <span style={{ fontSize: "12px" }} className="text-red-500 ">
                  {errorData.confirm}
                </span>
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
              Register
            </button>
          </form>
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-4">
              <FaFacebook className="text-blue-600" size={24} />
              <FaInstagram className="text-pink-600" size={24} />
              <FaApple className="text-black" size={24} />
            </div>
            <div>
              <Link to="/login" className="text-blue-500 underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
