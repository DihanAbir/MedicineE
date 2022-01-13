// import React from 'react';
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const BlogPost = ({blog}) => {
//     console.log(blog)
//     return (
//       <div>
//         <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
//           <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-3xl">
//             <img src={blog.ImageUrl} className="object-cover w-full h-64" alt="" />
//             <div className="p-5 mb-4">
//               <p className="pb-4 mb-3 font-sans text-xs font-semibold tracking-wide uppercase border-b border-gray-300 ">
//                 <a
//                   href="/"
//                   className="pr-4 text-teal-500 transition-colors duration-200 border-r border-gray-300 hover:text-teal-accent-700"
//                   aria-label="Category"
//                   title="date"
//                 >
//                   28 Jan 2021
//                 </a>
//                 <span className="px-4 text-gray-600">4 comments</span>
//               </p>
//               <a
//                 href="/"
//                 aria-label="Category"
//                 title="Visit the East"
//                 className="inline-block pt-3 mb-3 text-2xl font-medium leading-5 text-gray-700 transition-colors duration-200 font-display"
//               >
//                 {blog.Title}
//               </a>
//               <p className="pb-4 mb-2 text-gray-700">
//                 Solo travel gives you a chance to listen to your gut and control
//                 what direction you want to head gut and control.
//               </p>
//               <a
//                 href="#_"
//                 class="bg-teal-300 py-2 px-4 rounded-sm tracking-wide text-white hover:text-white shadow-lg transition-all  hover:bg-teal-500 cursor-pointer"
//               >
//                 Read More <FontAwesomeIcon icon={faArrowRight} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default BlogPost;