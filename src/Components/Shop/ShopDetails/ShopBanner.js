import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";



const ShopBanner = () => {
  const newVendor = useSelector((state) => state.shop.singleShop);
  console.log("🚀 ~ file: ShopBanner.js ~ line 15 ~ ShopBanner ~ newVendor", newVendor)

  const { shopName, banner, logo, location, city, name, phone, status } =
    newVendor;

  return (
    <Fragment>
      <Helmet>
        <title>{shopName}</title>
        <meta name={name} content={location}/>
      </Helmet>
      <div className="container mx-auto">
        <div className="relative max-w-full mt-6 mb-10">
          {/* Shop banner */}
          <img
            src={banner}
            alt="banner"
            className="object-cover w-full max-h-80"
          />

          {/* Shop Details */}
          <div className="top-0 bottom-0 left-0 flex flex-col items-center justify-center px-4 py-4 text-white bg-teal-500 sm:bg-blue-600 bg-opacity-90 sm:bg-opacity-40 lg:w-4/12 md:py-4 lg:py-12 lg:absolute max-h-80 text-sans">
            <img src={logo} alt="logo" className="w-16 rounded-full" />
            <h1 className="pt-2 text-2xl font-semibold tracking-wide text-white">
              {shopName}
            </h1>
            <h4 className="pb-2 text-xl text-white">Owner: {name}</h4>

            <div>
              <div className="flex pb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p>
                  {location}, {city}
                </p>
              </div>
              <div className="flex pb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p>{phone}</p>
              </div>
              <div className="flex pb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <p>Store {status}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ShopBanner;