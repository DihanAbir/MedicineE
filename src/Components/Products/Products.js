import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddToCart from '../Common/AddToCart';

const Products = () => {
  const products = useSelector(state => state.product.allProduct)
  return (
    <Fragment>
      <div className="bg-white">
        <div className="max-w-2xl px-4 pt-10 pb-10 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 sm:pt-10">
          <div className="flex justify-between align-center">
            <h2 className="text-2xl font-semibold tracking-wide text-teal-700 font-display">
              Our Products
            </h2>

            <div className="flex align-middle col-12 justify-content-center">
              <button
                type="button"
                className="mr-6 text-lg text-teal-600 btn btn-light"
                data-toggle="collapse"
                data-target="#filters"
              >
                Filters <i class="fa fa-filter"></i>
              </button>
              <input
                type="text"
                className="p-1 text-teal-800 placeholder-gray-600 border border-teal-300 rounded col-6 border-1 sm:p-2 focus:border-teal-500"
                placeholder="Search medicine..."
                id="search-filter"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product._id} className="group shadow-4xl">
                <Link to={`/productDetails/${product._id}`}>
                  <div className="w-full overflow-hidden bg-blue-200 rounded-md min-h-80 aspect-w-1 aspect-h-1 group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="object-cover object-center w-full h-full lg:w-full lg:h-full"
                    />
                  </div>

                  {/* name and price */}
                  <div className="flex justify-between px-2 mt-4">
                    <div>
                      <h3 className="tracking-wide text-gray-900 text-md font-display">
                        <a href={product.href}>
                          <span aria-hidden="true" className="inset-0" />
                          {product.name}
                        </a>
                      </h3>
                    </div>
                    <p className="flex font-medium text-teal-600 text-md">
                      ৳{product.price}
                    </p>
                  </div>
                </Link>

                  <div>
                    <p className="px-2 mt-1 font-sans text-sm tracking-wide text-gray-900">
                      {product.brand}
                    </p>
                  </div>

                  {/*  wishlist, quick view, add to cart buttons */}
                  <div className="flex items-center justify-between px-2 my-4">
                    <div>
                      <button
                        className="p-2 text-gray-900 transition duration-150 ease-in-out rounded-full hover:bg-teal-400 hover:text-teal-50"
                        title="Add to Wishlist"
                      >
                        <svg
                          className="w-5 h-5 transition duration-150 ease-in-out"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          ></path>
                        </svg>
                      </button>
                      <button
                        className="p-2 text-gray-900 transition duration-150 ease-in-out rounded-full hover:bg-teal-400 hover:text-teal-50"
                        title="Quick View"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* <Link to="/productDetails"> */}
                      <AddToCart product={product}/>
                    {/* </Link> */}
                  </div>
                {/* </Link> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;