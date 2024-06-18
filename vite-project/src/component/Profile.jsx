import React from 'react';
import { useEffect } from 'react';
const Profile = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200  pt-20">
            <div className="bg-white rounded-lg shadow-lg p-3 w-full  max-w-md">
                <div className="flex flex-col items-center">
                    <img 
                        src="public\profileimage.png" 
                        alt="Profile" 
                        className="rounded-full w-24 h-24 mb-4"
                    />
                    <button className="bg-blue-500 text-white rounded-full px-4 py-2 mb-4">
                        Connect to LinkedIn
                    </button>
                </div>
                <form className="space-y-4">
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <input 
                                type="text" 
                                value="Andrew" 
                                readOnly 
                                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input 
                                type="text" 
                                value="Turing" 
                                readOnly 
                                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Time Zone</label>
                        <input 
                            type="text" 
                            value="+5 GMT" 
                            readOnly 
                            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input 
                            type="text" 
                            value="555-237-2384" 
                            readOnly 
                            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input 
                            type="text" 
                            value="andrew.turing@cryptographyinc.com" 
                            readOnly 
                            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Authentication</label>
                        <div className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2 bg-gray-100">
                            <p className="text-sm text-gray-900">SAML ID</p>
                            <p className="text-sm text-gray-700">andrew.turing@cryptographyinc.com</p>
                            <a href="https://cryptographyinc.com/login/secure/KQ28neiw99" className="text-blue-600">
                                https://cryptographyinc.com/login/secure/KQ28neiw99
                            </a>
                        </div>
                    </div>
                
                </form>
            </div>
        </div>
    );
};

export default Profile;
