import React, { useEffect } from 'react';

const Profile = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center pt-16 ">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Your Name
                        </label>
                        <input 
                            type="text" 
                            id="name" 
                            defaultValue="Anthony Webb" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input 
                            type="password" 
                            id="password" 
                            defaultValue="********" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        />
                        <a href="#" className="text-blue-500 text-sm">Change</a>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            defaultValue="myemail@address.com" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        />
                        <a href="#" className="text-blue-500 text-sm">Change</a>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Upload a picture
                        </label>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Upload a picture
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-gray-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Cancel
                        </button>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Save
                        </button>
                    </div>
                    <div className="mt-4 text-center">
                        <a href="#" className="text-red-500 text-sm">Delete Your Account</a>
                        <p className="text-gray-500 text-xs">You will receive an email to confirm your decision.</p>
                        <p className="text-gray-500 text-xs">Once you delete your account, there is no going back. Please be certain.</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;
