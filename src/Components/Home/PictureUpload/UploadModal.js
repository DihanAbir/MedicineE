import React, { useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "sans-serif",
    width: "500px",
    borderRadius: "10px",
  },
};
Modal.setAppElement("#root");

const UploadModal = ({
  modalIsOpen,
  closeModal
}) => {
  const { register, handleSubmit, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);
  console.log(imageURL)
    const onSubmit = (data) => {
      data.created = new Date();
      data.image = imageURL;
      console.log(data)
  };

   const handleImageUpload = (e) => {
     console.log(e.target.files[0]);
     const imageData = new FormData();
     imageData.set("key", "e15280157dd6d713e47877855af34eeb");
     imageData.append("image", e.target.files[0]);

     axios
       .post("https://api.imgbb.com/1/upload", imageData)
       .then(function (response) {
         setImageURL(response.data.data.display_url);
         console.log(response.data.data.display_url);
       })
       .catch(function (error) {
         console.log(error);
       });
   };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center text-brand">{}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-2 from-group col-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="form-control"
              {...register("name", {
                required: true,
                maxLength: 20,
                pattern: "^.* .*$",
              })}
            ></input>
          </div>
          <div className="from-group row">
            <div className="mt-2 col-4">
              <select
                name="gender"
                type="select"
                className="form-control"
                {...register("gender", { required: true })}
              >
                <option disabled={true} defaultValue="Not set">
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="Not set">Other</option>
              </select>
            </div>
            <div className="mt-2 from-group col-4">
              <input
                type="number"
                name="age"
                placeholder="Your Age"
                className="form-control"
                {...register("age", { required: true })}
              ></input>
            </div>
            <div className="mt-2 from-group col-4">
              <input
                type="number"
                name="weight"
                placeholder="Weight"
                className="form-control"
                {...register("weight", { required: true })}
              ></input>
            </div>
          </div>
          <div className="mt-2 form-group">
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="form-control"
              {...register("phone", {
                required: true,
                maxLength: 11,
                pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
              })}
            ></input>
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
                      <span> Prescription Image</span>
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
          <div className="mt-2 form-group text-end">
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default UploadModal;
