import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useEffect, useState } from 'react';
// import { Helmet } from 'react-helmet';
// import BlogPost from './BlogPost';

const Blog = () => {
// const [blog, setBlog] = useState([]);

// const Blogs = blog.Result.Resources.Resource;
// console.log(Blogs)

//   useEffect(() => {
//     fetch("https://health.gov/myhealthfinder/api/v3/topicsearch.json")
//       .then((res) => res.json())
//       .then((data) => setBlog(data));
//     }, [])

  return (
    <Fragment >
      <div className="px-4 pt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8" id="blogs">
        <h2 className="mb-4 text-4xl font-semibold tracking-wide text-center text-teal-500 font-display">
          Our Latest News
        </h2>
        <p className="mb-12 font-sans text-center text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          dolorem.
        </p>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-3xl">
            <img
              src="https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2018/05/blog-1-720x484.jpg"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 mb-4">
              <p className="pb-4 mb-3 font-sans text-xs font-semibold tracking-wide uppercase border-b border-gray-300 ">
                <a
                  href="/"
                  className="pr-4 text-teal-500 transition-colors duration-200 border-r border-gray-300 hover:text-teal-accent-700"
                  aria-label="Category"
                  title="date"
                >
                  28 Jan 2021
                </a>
                <span className="px-4 text-gray-600">4 comments</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block pt-3 mb-3 text-2xl font-medium leading-5 text-gray-700 transition-colors duration-200 font-display"
              >
                Travelling Solo Is Awesome
              </a>
              <p className="pb-4 mb-2 text-gray-700">
                Solo travel gives you a chance to listen to your gut and control
                what direction you want to head gut and control.
              </p>
              <a
                href="#_"
                class="bg-teal-300 py-2 px-4 rounded-sm tracking-wide text-white hover:text-white shadow-lg transition-all  hover:bg-teal-500 cursor-pointer"
              >
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>

          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-3xl">
            <img
              src="https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2018/05/blog-4-720x484.jpg"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 mb-4">
              <p className="pb-4 mb-3 font-sans text-xs font-semibold tracking-wide uppercase border-b border-gray-300 ">
                <a
                  href="/"
                  className="pr-4 text-teal-500 transition-colors duration-200 border-r border-gray-300 hover:text-teal-accent-700"
                  aria-label="Category"
                  title="date"
                >
                  18 Jun 2021
                </a>
                <span className="px-4 text-gray-600">1 comments</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block pt-3 mb-3 text-2xl font-medium leading-5 text-gray-700 transition-colors duration-200 font-display"
              >
                A Beautiful Sunday Morning
              </a>
              <p className="pb-4 mb-2 text-gray-700">
                There seems to be nature's healing medicine in fresh air. You
                and your children will notice sweet aromas in the air.
              </p>
              <a
                href="#_"
                class="bg-teal-300 py-2 px-4 rounded-sm tracking-wide text-white hover:text-white shadow-lg transition-all hover:bg-teal-500 cursor-pointer "
              >
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>

          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-3xl">
            <img
              src="https://medik.wpengine.com/wp-content/uploads/2019/01/blog9-1024x648.jpg"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 mb-4">
              <p className="pb-4 mb-3 font-sans text-xs font-semibold tracking-wide uppercase border-b border-gray-300 ">
                <a
                  href="/"
                  className="pr-4 text-teal-500 transition-colors duration-200 border-r border-gray-300 hover:text-teal-accent-700"
                  aria-label="Category"
                  title="date"
                >
                  5 SEP 2021
                </a>
                <span className="px-4 text-gray-600">2 comments</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block pt-3 mb-3 text-2xl font-medium leading-5 text-gray-700 transition-colors duration-200 font-display"
              >
                Blood Pressure Machine
              </a>
              <p className="pb-4 mb-2 text-gray-700">
                To measure blood pressure, your doctor uses an instrument call a
                sphygmomanometer, which is more often referred to as a blood
                pressure cuff.
              </p>
              <a
                href="#_"
                className="px-4 py-2 tracking-wide text-white transition-all bg-teal-300 rounded-sm shadow-lg cursor-pointer hover:text-white hover:bg-teal-500"
              >
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Blog;
