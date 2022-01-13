import React from "react";
import { useSelector } from "react-redux";

const Categories = () => {
  const categories = useSelector((state) => state.category);

  // console.log(categories[0].category)
  return (
    <div className="mt-12">
      <h1 className="px-3 mb-5 text-lg font-semibold text-teal-700 font-display">
        Product Category
      </h1>
      <div className="">
        {categories.map((singleCategory) => (
          <div className="m-2">
            <ul>
              <li className="p-2 my-4 cursor-pointer bg-teal-50 hover:bg-teal-100 shadow-4xl">
                <div className="flex items-center justify-between">
                  <p className="tracking-wide text-gray-800 whitespace-no-wrap">
                    {singleCategory.name}
                  </p>
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
