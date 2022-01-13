import { Fragment } from "react";
import NavBar from "../../Components/Home/NavBar/NavBar";
import Footer from '../../Components/Home/Footer/Footer'

const ReleaseUpdate = () => {
    return (
      <Fragment>
        <NavBar/>
        <section className="p-6 overflow-hidden md:container md:mx-auto">
          <div className="object-contain m-5 bg-light-blue-100">
            <img
              className="object-contain w-full h-48 md:object-scale-down"
              src="https://stonly.imgix.net/media/images/59050129-604a-4ef6-949b-b8f9bf221e1f.png?w=1280&h=1440&auto=format&dpr=1"
              alt=""
            ></img>
          </div>
          <div className="text-center">
            <h1 className="text-3xl">Release Notes - [Date]</h1>

            <ol className="p-5 text-xl">
              <h3 className="font-bold">🚀 New</h3>
              <li>● Feature #1</li>
              <li>● Feature #2</li>

              <h3 className="mt-8 font-bold">🔧 Fixes</h3>
              <li>● Fix #1</li>
              <li>● Fix #2</li>
              <li>● Fix #3</li>

              <h3 className="mt-8 font-bold">🌟 Improvements </h3>
              <li>● Improvement #1</li>
              <li>● Improvement #2</li>
            </ol>
            <div className="my-5">
              <a
                href="#learn"
                className="px-4 py-3 mt-6 text-center text-white uppercase bg-pink-400 rounded-full hover:bg-pink-700"
              >
                Learn About Feature #1
              </a>
              <a
                href="#learn"
                className="px-4 py-3 m-3 text-center text-white uppercase bg-gray-700 rounded-full hover:bg-pink-700"
              >
                Learn About Feature #2
              </a>
            </div>
          </div>
        </section>

        <Footer/>
      </Fragment>
    );
};

export default ReleaseUpdate;


