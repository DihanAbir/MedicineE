import { RadioGroup } from "@headlessui/react";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Footer from "../../Components/Home/Footer/Footer";
import NavBar from "../../Components/Home/NavBar/NavBar";
import { createVendorAccount } from "../../Redux/user/actions";

const settings = [{ delivery: "Yes" }, { delivery: "No" }];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const CreateShop = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isDeliveryHas, setIsDeliveryHas] = useState(settings[0]);
  const [logoImgURL, setLogoImgURl] = useState(null);
  const [bannerImgURL, setBannerImgURl] = useState(
    "https://i.ibb.co/zR760Cw/Image-2.jpg"
  );

  const handleImageUpload = (e, setImage) => {
    console.log(e.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "e9b76bac5b575af176bc9b5717b706ca");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImage(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    const vendorData = {
      shopName: data.shopName,
      name: data.ownerName,
      email: data.email,
      phone: data.phone,
      logo: logoImgURL,
      banner: bannerImgURL,
      location: data.address,
      city: data.city,
      postalCode: data.zip,
      password: data.password,
      confirmPassword: data.confirmPassword,
      hasOwnDelivery: isDeliveryHas.delivery === "No" ? false : true,
    };
    dispatch(createVendorAccount(vendorData));
  };

  //console.log(isDeliveryHas)
  return (
    <div>
      <NavBar />

      {/* Create Shop */}
      <div className="container px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <form
          className="space-y-8 divide-y divide-gray-200"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div>
              <div>
                <h2 className="text-xl font-medium leading-6 text-gray-800">
                  Create Your Shop
                </h2>
                <p className="max-w-2xl mt-1 text-sm text-gray-500">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>

              <div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Shop Name
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      name="shopName"
                      id="shop-name"
                      placeholder="John's Shop"
                      autoComplete="given-name"
                      className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                      {...register("shopName")}
                      required
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Shop Owner name
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      name="ownerName"
                      id="owner-name"
                      placeholder="John Doe"
                      autoComplete="owner-name"
                      className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                      {...register("ownerName")}
                      required
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Email address
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="johndoe@email.com"
                      autoComplete="email"
                      className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                      {...register("email")}
                      required
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Phone Number
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="01726987456"
                      autoComplete="phone"
                      className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                      {...register("phone")}
                      required
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Shop Logo
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <div className="flex justify-center max-w-lg px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="w-8 h-8 mx-auto text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a Logo</span>
                            <input
                              id="file-upload"
                              onChange={(e) =>
                                handleImageUpload(e, setLogoImgURl)
                              }
                              name="file-upload"
                              type="file"
                              className="sr-only"
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

                {/* <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                    <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                        Cover photo
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
                                                className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" onChange={(e)=>handleImageUpload(e,setBannerImgURl)}  name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                        </div>
                                    </div>
                                </div> */}
              </div>
            </div>

            <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
              <div className="space-y-6 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Street address
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      name="address"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      {...register("address")}
                      required
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    City
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                      {...register("city")}
                      required
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    ZIP / Postal
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      name="zip"
                      id="zip"
                      autoComplete="postal-code"
                      className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                      {...register("zip")}
                      required
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Password
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                      {...register("password")}
                      required
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      className="block w-full max-w-lg border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm"
                      {...register("confirmPassword")}
                      required
                    />
                  </div>
                </div>

                <div className="pt-6 sm:pt-5">
                  <div role="group" aria-labelledby="label-email">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                      <div>
                        <div
                          className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                          id="label-email"
                        >
                          Has Own Delivery System?
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-0 sm:col-span-2">
                        <div className="max-w-lg space-y-4">
                          <RadioGroup
                            value={isDeliveryHas}
                            onChange={setIsDeliveryHas}
                          >
                            <RadioGroup.Label className="sr-only">
                              Privacy setting
                            </RadioGroup.Label>
                            <div className="-space-y-px bg-white rounded-md">
                              {settings.map((setting, settingIdx) => (
                                <RadioGroup.Option
                                  key={setting.delivery}
                                  value={setting}
                                  className={({ checked }) =>
                                    classNames(
                                      settingIdx === 0
                                        ? "rounded-tl-md rounded-tr-md"
                                        : "",
                                      settingIdx === settings.length - 1
                                        ? "rounded-bl-md rounded-br-md"
                                        : "",
                                      checked
                                        ? "bg-indigo-50 border-indigo-200 z-10"
                                        : "border-gray-200",
                                      "relative border p-4 flex cursor-pointer focus:outline-none"
                                    )
                                  }
                                >
                                  {({ active, checked }) => (
                                    <>
                                      <span
                                        className={classNames(
                                          checked
                                            ? "bg-indigo-600 border-transparent"
                                            : "bg-white border-gray-300",
                                          active
                                            ? "ring-2 ring-offset-2 ring-indigo-500"
                                            : "",
                                          "h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center"
                                        )}
                                        aria-hidden="true"
                                      >
                                        <span className="rounded-full bg-white w-1.5 h-1.5" />
                                      </span>
                                      <div className="flex flex-col ml-3">
                                        <RadioGroup.Label
                                          as="span"
                                          className={classNames(
                                            checked
                                              ? "text-indigo-900"
                                              : "text-gray-900",
                                            "block text-sm font-medium"
                                          )}
                                        >
                                          {setting.delivery}
                                        </RadioGroup.Label>
                                        <RadioGroup.Description
                                          as="span"
                                          className={classNames(
                                            checked
                                              ? "text-indigo-700"
                                              : "text-gray-500",
                                            "block text-sm"
                                          )}
                                        >
                                          {setting.description}
                                        </RadioGroup.Description>
                                      </div>
                                    </>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <input
                type="submit"
                className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-gray-600 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                value="Create Account"
              />
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default CreateShop;
