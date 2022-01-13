import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddToCart from "../Common/AddToCart";
import QuantityButton from "../Common/QuantityButton";
import ShowRating from "../Common/ShowRating";

const ProductInfo = ({
  product, product: { name, image, brand, description, totalReview },
}) => {
  const [productWithQuantity, setProductWithQuantity] = useState(null)
  useEffect(() => {
    setProductWithQuantity(product)
  }, [product])

  const updateQuantity=(quantity)=>{
    setProductWithQuantity({...product,quantity});
  }

  return (
    <Fragment>
      <div className="flex flex-wrap justify-between mx-auto">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-64 rounded lg:w-1/3 lg:h-auto"
          src={image}
        />
        <div className="w-full mt-6 lg:w-2/3 lg:pl-10 lg:py-6 lg:mt-0">
          <h1 className="mb-2 text-3xl font-medium text-teal-500 font-display title-font">
            {name}
          </h1>
          <h2 className="mb-2 text-sm tracking-widest text-gray-800 title-font">
            Brand: {brand}
          </h2>
          <div className="mb-2">
            <ShowRating value={4} />
          </div>
          <p className="h-20 overflow-hidden font-sans leading-relaxed tracking-wide text-gray-800">
            {description}
          </p>
          <div className="flex items-center pb-4 mt-4 mb-4 border-b-2 border-gray-100">
            <span className="text-2xl font-medium text-gray-900 title-font">
              ৳ 58.00
            </span>
          </div>
          <div className="flex flex-wrap gap-3 align-center">
            <QuantityButton product={product} updateQuantity={updateQuantity}/>

            <Link to="checkout">
             <AddToCart icon product={productWithQuantity}/>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductInfo;

//In title, Product Details should be dynamic when we load our data dynamically from database
