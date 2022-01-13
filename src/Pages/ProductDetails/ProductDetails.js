import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Footer from "../../Components/Home/Footer/Footer";
import Header from "../../Components/Home/NavBar/Header";
import NavBar from "../../Components/Home/NavBar/NavBar";
import Menu from "../../Components/ProductDetails/Menu";
import ProductInfo from "../../Components/ProductDetails/ProductInfo";
import { getSingleProduct } from "../../Redux/product/actions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product.singleProduct);
  const dispatch = useDispatch();
  const { productId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getSingleProduct(productId));
  }, []);
  
  return (
    <Fragment>
      <Header />
      <NavBar />
      <section className="overflow-hidden">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <ProductInfo product={product} />
          <Menu product={product} />
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default ProductDetails;
