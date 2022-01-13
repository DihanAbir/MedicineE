import React from 'react';
import {Link} from 'react-router-dom';
const CreateShopCTA = () => {
    return (
        <div>
            <section className="px-0 py-12 mx-auto max-w-7xl sm:px-4 mt-10">
                <div className="text-white bg-teal-500 border-teal-400 rounded-none card card-body sm:rounded-lg">
                    <div className="flex flex-col items-center justify-between px-2 py-4 lg:flex-row sm:py-8 sm:px-4">
                        <p className="mb-6 text-lg lg:text-xl font-sans font-medium lg:mb-0 text-white tracking-wide">
                        Open your local pharmacy turn into online store and increase your
                        sells. It's totally free!
                        </p>
                        <Link to="/createShop">
                            <button className="flex py-2 px-6 rounded shadow-3xl bg-white focus:outline-none active:bg-teal-400 text-teal-600 font-medium transition duration-150 ease-in-out hover:bg-teal-100 hover:text-teal-800">
                            <svg
                                className="w-5 h-5 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                ></path>
                            </svg>
                            Create a new Store
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CreateShopCTA;