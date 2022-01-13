import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShowRating from "../../Common/ShowRating";

const ShopCard = () => {
  const shopCards = useSelector((state) => state.shop.allShop);

  return (
    <div className="pt-8 pb-10 bg-teal-50">
      {/* Shop Card */}
      <div className="w-full py-8 text-center">
        <h1 className="text-4xl font-medium tracking-wide text-teal-700 font-display">
          Your Nearest Medicine Store
        </h1>
        <p className="mt-2 font-sans text-base tracking-wide text-gray-700">
          Search for Medicine, Filter by your location
        </p>
      </div>
      <div className="flex flex-wrap justify-center cards">
        {shopCards &&
          shopCards.map((shopCard) => (
            <div
              key={shopCard._id}
              className="pb-4 m-6 bg-white rounded-lg shadow-3xl w-96 md:w-2/5 lg:w-1/4"
            >
              <img
                src={shopCard.banner}
                className="object-cover w-full h-48 rounded-t-lg md:h-52 md:w-full"
                alt=""
              />

              <div className="relative pt-2">
                <div className="absolute flex items-center justify-center w-full -mt-12">
                  <img
                    className="object-cover w-16 h-16 border-2 border-gray-400 shadow-3xl rounded-2xl"
                    src={shopCard.logo}
                    alt=""
                  />
                </div>

                <div className="px-4 pt-5">
                  <div className="absolute right-4 top-8 shadow-4xl">
                    <p
                      className={`rounded border border-teal-300 py-0.5 px-3 ${
                        "shopCard.status" === "shopCard.status"
                          ? "text-green-800"
                          : "text-red-400"
                      }`}
                    >
                      {/* {shopCard.status} */}
                      Open
                    </p>
                  </div>

                  <h1 className="font-medium text-xl py-1.5 text-teal-800 font-sans tracking-wide">
                    {shopCard.shopName}
                  </h1>
                  <div className="font-sans text-sm text-gray-800">
                    <div className="mb-2">
                      <ShowRating value={shopCard.rating} />
                    </div>

                    <p className="pb-1">
                      {shopCard.location} {shopCard["postal code"]}
                    </p>
                    <p className="pb-1">{shopCard.city}</p>
                    <p className="pb-1">{shopCard.address3}</p>
                    <div className="flex">
                      <svg
                        className="w-4 h-4 mt-0.5 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                      <p>{shopCard.phone}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visit store button */}
              <div className="flex items-center justify-center my-2 mt-4 ">
                <Link to={`/shopDetails/${shopCard._id}`}>
                  <button className="flex px-6 py-2 text-white transition duration-150 ease-in-out bg-teal-400 rounded shadow-lg focus:outline-none active:bg-teal-400 hover:bg-teal-600">
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
                    Visit Store
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>

      {/* More button */}
      <div className="mt-8 text-center">
        <Link
          to="/allShop"
          className="inline-flex items-center justify-center h-12 px-6 font-sans font-medium tracking-wider text-white transition duration-200 bg-teal-400 rounded shadow-md hover:text-white hover:bg-teal-700 focus:shadow-outline focus:outline-none"
        >
          See More{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ShopCard;
