import React from "react";
import Categories from "../../Components/Categories/Categories";
import ShopBanner from "../../Components/Shop/ShopDetails/ShopBanner";
import AllShopBanner from "../../Components/Shop/AllShop/AllShopBanner";
import DisplayShops from "../../Components/Shop/AllShop/DisplayShops";
import NavBar from "../../Components/Home/NavBar/NavBar";
import Header from "../../Components/Home/NavBar/Header";

const AllShop = () => {
  return (
    <section>
      {/* Shop Banner*/}
      <Header />
      <NavBar />
      <AllShopBanner />
      <div className="container px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        {/* Shop sidebar */}

        <div className="order-last ">
          {/* Products */}
          <DisplayShops />
        </div>
      </div>
    </section>
  );
};

export default AllShop;
