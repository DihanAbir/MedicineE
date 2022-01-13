import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createCategory } from "../../../../Redux/category/actions";

const AddNewCategory = ({ setNewCategory }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const productCategory = {
      name: data.categoryName,
    };
    dispatch(createCategory(productCategory, setNewCategory));
  };

  return (
    <section>
      <div className="fixed inset-0 z-50 overflow-x-hidden overflow-y-auto outline-none focus:outline-none backdrop-filter saturate-150 backdrop-blur-sm">
        <div className="container items-center px-5 py-12 ml-0 lg:px-20 lg:ml-20">
          <div
            className="w-full mx-auto text-gray-800 bg-white border rounded-lg shadow-xl"
            aria-hidden="false"
            aria-describedby="modalDescription"
            role="dialog"
          >
            <div className="overflow-hidden font-medium bg-white shadow sm:rounded-lg font-body">
              <div className="flex items-center justify-between px-5 pt-8 mb-4">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Create New Category
                  </h3>
                </div>

                <button
                  className="justify-end p-1 mr-4 -mt-6 text-teal-600 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-teal-700 focus:outline-none"
                  type="button"
                  aria-label="Close"
                  aria-hidden="true"
                  onClick={() => setNewCategory(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-x"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M10 10l4 4m0 -4l-4 4"></path>
                  </svg>
                </button>
              </div>
            </div>
            {/* Product Details */}
            <form
              className="p-5 space-y-8 divide-y divide-gray-200"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-3">
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Category Name
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="flex max-w-lg rounded-md shadow-sm b-teal-400">
                        <input
                          type="text"
                          name="category"
                          id="username"
                          autoComplete="category"
                          placeholder="General"
                          className="flex-1 block w-full min-w-0 border-gray-300 rounded-none b-teal-200 focus:ring-teal-500 focus:border-teal-500 rounded-r-md sm:text-sm"
                          {...register("categoryName")}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    Cancel
                  </button>
                  <input
                    type="submit"
                    className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-md shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    value="Add"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Background Modal Opacity */}
      <div className="fixed inset-0 z-40 bg-gray-900 opacity-25" />
    </section>
  );
};

export default AddNewCategory;
