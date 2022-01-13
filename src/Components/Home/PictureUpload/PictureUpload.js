import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import UploadModal from './UploadModal';

const PictureUpload = () => {
const [modalIsOpen, setIsOpen] = React.useState(false);

     function openModal() {
       setIsOpen(true);
     }

     function closeModal() {
       setIsOpen(false);
     }

  return (
    <div
      className="bg-center bg-no-repeat bg-cover min-h-auto"
      style={{
        backgroundImage: `url(https://i.imgur.com/1ZNaBq1.jpg)`,
      }}
    >
      <div className="px-4 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <div className="max-w-xl sm:mx-auto sm:text-center lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <a href="/" className="mt-16 mb-6 sm:mx-auto">
              <div className="flex items-center justify-center w-16 h-16 text-2xl text-white bg-teal-400 rounded-full">
                <FontAwesomeIcon icon={faCamera} />
              </div>
            </a>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 text-3xl font-semibold leading-none tracking-normal text-gray-800 font-display sm:text-4xl md:mx-auto">
                Ask Your Pharmacist, <br /> Not the Internet
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                We have made our systems as many simple as we can. You can just
                take a picture of your prescription and send it to us to place
                your order
              </p>
            </div>
            <div>
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center h-12 px-6 font-sans font-medium tracking-wider text-white uppercase transition duration-200 bg-teal-400 rounded shadow-md hover:text-white hover:bg-teal-700 focus:shadow-outline focus:outline-none"
              >
                Upload Your prescription
              </button>
              <UploadModal
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
              ></UploadModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureUpload;
