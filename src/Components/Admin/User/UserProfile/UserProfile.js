import React from 'react';
import {Link } from 'react-router-dom'

const UserProfile = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-2">
            <div className="user-profile w-full flex flex-col items-center justify-center">
                <div className="user-image">
                <img className="h-60 w-60 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
                </div>
                <div className="user-details py-4 text-center">
                    <h4 className="text-2xl font-bold pb-1">John Doe</h4>
                    <p className="text-lg">Email: john@doe.com</p>
                    <p className="text-lg">Phone: +98765670868</p>
                    <p className="text-lg">Address: 4600, Shimla</p>
                </div>
                <Link to="/editUserInfo">
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Edit Info
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default UserProfile;