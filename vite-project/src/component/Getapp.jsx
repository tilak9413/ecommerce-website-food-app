import React, { useState } from 'react';
const Getapp = () => {
  const [selectedOption, setSelectedOption] = useState('email');

  return (
    <div className="flex flex-col  lg:flex-row items-center justify-evenly   p-10">
      <div className="mb-8 lg:mb-0">
        <img src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png" alt="get-zomato-app" className="max-w-xs mx-auto" />
      </div>
      <div className="text-center lg:text-left">
        <h2 className="text-3xl font-semibold mb-4">Get the Zomato app</h2>
        <p className="text-gray-700 mb-6">
          We will send you a link, open it on your phone to download the app
        </p>
        <div className="flex justify-center lg:justify-start mb-4">
          <label className="flex items-center mr-4">
            <input
              type="radio"
              name="contact"
              value="email"
              checked={selectedOption === 'email'}
              onChange={() => setSelectedOption('email')}
              className="mr-2"
            />
            Email
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="contact"
              value="phone"
              checked={selectedOption === 'phone'}
              onChange={() => setSelectedOption('phone')}
              className="mr-2"
            />
            Phone
          </label>
        </div>
        <div className="flex justify-center lg:justify-start mb-6">
          <input
            type="text"
            placeholder={selectedOption === 'email' ? 'Email' : 'Phone'}
            className="p-2 border rounded-l-md w-60"
          />
          <button className="bg-red-500 text-white px-4 rounded-r-md">
            Share App Link
          </button>
        </div>
        <p className="text-gray-700 mb-2">Download app from</p>
        <div className="flex justify-center lg:justify-start">
          <a href="" target="_blank" rel="noopener noreferrer" className="mr-4">
            <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="Google Play Store" className="w-36" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="Apple App Store" className="w-36" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Getapp;
