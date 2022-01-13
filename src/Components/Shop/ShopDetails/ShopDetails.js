import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getSingleShopCategory } from "../../../Redux/category/actions";
import { getSingleShopProduct } from "../../../Redux/product/actions";
import { getSingleShop } from "../../../Redux/shop/actions";
import Categories from "../../Categories/Categories";
import ContactVendor from "../../ContactVendor/ContactVendor";
import Products from "../../Products/Products";
import ShopBanner from "./ShopBanner";
import ShopPromotion from "./ShopPromotion";

const ShopDetails = () => {
  const dispatch = useDispatch();
  const { vendorId } = useParams();

  useEffect(() => {
    dispatch(getSingleShop(vendorId));
    dispatch(getSingleShopCategory(vendorId));
    dispatch(getSingleShopProduct(vendorId));

  }, []);

  return (
    <section>
      {/* Shop Banner*/}
      <ShopBanner />
      <ShopPromotion />
      <div className="container flex flex-col-reverse px-4 mx-auto md:flex-row sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        {/* Shop sidebar */}
        <div className="order-first bg-white md:w-3/12">
          <Categories />
          <ContactVendor />
        </div>

        <div className="order-last md:w-9/12">
          {/* Products */}
          <Products />
        </div>
      </div>
    </section>
  );
};

export default ShopDetails;
