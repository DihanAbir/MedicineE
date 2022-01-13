import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Blog from "../../Components/Home/Blog/Blog";
import Footer from "../../Components/Home/Footer/Footer";
import Hero from "../../Components/Home/Hero/Hero";
import Header from "../../Components/Home/NavBar/Header";
import NavBar from "../../Components/Home/NavBar/NavBar";
import OfferCard from "../../Components/Home/OfferCard/OfferCard";
import PictureUpload from "../../Components/Home/PictureUpload/PictureUpload";
import ShopCard from "../../Components/Home/ShopCard/ShopCard";
import CreateShopCTA from "../../Components/Home/VendorCTA/CreateShopCTA";
import VendorCTA from "../../Components/Home/VendorCTA/VendorCTA";
import { getAllShop } from "../../Redux/shop/actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllShop());
  }, []);

  return (
    <>
      {/* Background Image with 3 sections */}
      <div
        className="bg-center bg-no-repeat bg-cover min-h-auto lg:min-h-screen"
        style={{
          backgroundImage: `url(https://i.ibb.co/9hFrQqt/medicine-home-banner.png)`,
        }}
      >
        <Header />
        <NavBar />
        <Hero />
      </div>
      <OfferCard />
      <ShopCard />
      <PictureUpload />
      <VendorCTA />
      <CreateShopCTA />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
