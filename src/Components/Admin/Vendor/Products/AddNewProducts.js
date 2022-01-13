import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getSingleShopCategory } from "../../../../Redux/category/actions";
import { createProduct } from "../../../../Redux/product/actions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AddNewProducts = ({ setEditModal }) => {
  const dispatch = useDispatch();
  const vendorId = useSelector((state) => state.user?.vendorInfo?._id);
  const category = useSelector((state) => state.category);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [pdImgUrl, setPdImgUrl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleImageUpload = (e) => {
    console.log(e.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "7bb36d98c8706d1538cecdc8950b9b34");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setPdImgUrl(response.data.data.display_url);
        console.log(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    const productData = {
      name: data.productName,
      description: data.productAbout,
      image: pdImgUrl,
      category: selectedCategory.name,
      brand: "Own Brand",
      price: data.productPrice,
    };
    dispatch(createProduct(productData, setEditModal));
  };

  useEffect(() => {
    dispatch(getSingleShopCategory(vendorId));
  }, [vendorId]);

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
                    Add New Product
                  </h3>
                </div>

                <button
                  className="justify-end p-1 mr-4 -mt-6 text-teal-600 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-teal-700 focus:outline-none"
                  type="button"
                  aria-label="Close"
                  aria-hidden="true"
                  onClick={() => setEditModal(false)}
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
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Product Name
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="flex max-w-lg rounded-md shadow-sm">
                        <input
                          type="text"
                          name="productName"
                          id="productName"
                          autoComplete="productName"
                          className="flex-1 block w-full min-w-0 border-gray-300 rounded-none focus:ring-teal-500 focus:border-teal-500 rounded-r-md sm:text-sm"
                          {...register("productName")}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Product Details
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <textarea
                        id="productAbout"
                        name="productAbout"
                        rows={3}
                        className="block w-full max-w-lg border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                        defaultValue={""}
                        {...register("productAbout")}
                        required
                      />
                      <p className="mt-2 text-sm text-gray-500">
                        Write a few sentences about product.
                      </p>
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Product Image
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="flex justify-center max-w-lg px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="w-12 h-12 mx-auto text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative font-medium text-teal-600 bg-white rounded-md cursor-pointer hover:text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                                onChange={handleImageUpload}
                                required
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-3">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Price
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="flex max-w-lg rounded-md shadow-sm">
                        <input
                          type="number"
                          name="productPrice"
                          id="productPrice"
                          autoComplete="productPrice"
                          className="flex-1 block w-full min-w-0 border-gray-300 rounded-none focus:ring-teal-500 focus:border-teal-500 rounded-r-md sm:text-sm"
                          {...register("productPrice")}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                    <Listbox
                      value={selectedCategory}
                      onChange={setSelectedCategory}
                    >
                      {({ open }) => (
                        <>
                          <Listbox.Label className="block text-sm font-medium text-gray-700">
                            Category
                          </Listbox.Label>
                          <div className="relative mt-1">
                            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                              <span className="block truncate">
                                {selectedCategory && selectedCategory.name}
                              </span>
                              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <SelectorIcon
                                  className="w-5 h-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>

                            <Transition
                              show={open}
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {category.map((person) => (
                                  <Listbox.Option
                                    key={person.id}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "text-white bg-indigo-600"
                                          : "text-gray-900",
                                        "cursor-default select-none relative py-2 pl-3 pr-9"
                                      )
                                    }
                                    value={person}
                                  >
                                    {({ selectedCategory, active }) => (
                                      <>
                                        <span
                                          className={classNames(
                                            selectedCategory
                                              ? "font-semibold"
                                              : "font-normal",
                                            "block truncate"
                                          )}
                                        >
                                          {person.name}
                                        </span>

                                        {selectedCategory ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? "text-white"
                                                : "text-indigo-600",
                                              "absolute inset-y-0 right-0 flex items-center pr-4"
                                            )}
                                          >
                                            <CheckIcon
                                              className="w-5 h-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </>
                      )}
                    </Listbox>
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
                    value="Add Product"
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

export default AddNewProducts;
