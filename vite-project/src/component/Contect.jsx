import React from 'react';

const Contect = () => {
  return (
    <div>
      <header className="bg-red-900 text-white  contect-bg   pt-20 p-4">
        <div className="container mx-auto  ">
          <h1 className="text-3xl">Contact Us</h1>
        </div>
      </header>
      <div className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-4">
          <iframe
            title="map"
            className="w-full h-64"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8984695037813!2d-74.00601518459324!3d40.712775979331866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDDsDQyJzQ2LjAiTiA3NMKwMDBJMA!5e0!3m2!1sen!2sus!4v1586452721231!5m2!1sen!2sus"
            allowFullScreen
          ></iframe>
        </div>
        <div className="md:w-1/2 p-4 text-center md:text-left">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p className="mt-4">60 Road Broklyn Golden Street of New York. USA</p>
          <p className="mt-2">+1-234-567-8009</p>
          <p className="mt-2">needhelp@company.com</p>
        </div>
      </div>
    </div>
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center">Write a Message</h2>
        <form className="max-w-lg mx-auto mt-8">
          <div className="grid grid-cols-1 gap-6">
            <input type="text" placeholder="Full name" className="p-3 border border-gray-300 rounded" />
            <input type="email" placeholder="Email address" className="p-3 border border-gray-300 rounded" />
            <input type="tel" placeholder="Phone" className="p-3 border border-gray-300 rounded" />
            <input type="text" placeholder="Subject" className="p-3 border border-gray-300 rounded" />
            <textarea placeholder="Write a message" className="p-3 border border-gray-300 rounded h-32"></textarea>
            <button type="submit" className="bg-red-900 text-white p-3 rounded">Send a Message</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contect;
