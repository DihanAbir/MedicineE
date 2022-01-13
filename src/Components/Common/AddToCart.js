import React from "react";
import { useDispatch } from "react-redux";
import { addInCartAction } from "../../Redux/cart/actions";

const AddToCart = ({ icon, product }) => {
  const dispatch = useDispatch();
  const addProductInCard = () => {
    if (product.quantity) {
      dispatch(addInCartAction(product));
    } else {
      dispatch(addInCartAction({ ...product, quantity: 1 }));
    }
  };
  return (
    <button
      class={`flex flex-wrap items-center py-2 px-4 ${
        icon ? "text-lg " : "text-sm"
      }  rounded shadow-lg bg-teal-500 focus:outline-none active:bg-teal-500 text-white transition duration-150 ease-in-out hover:bg-teal-700`}
      onClick={addProductInCard}
    >
      {icon && <i class="fas fa-cart-plus"></i>} &nbsp; Add To Cart
    </button>
  );
};

export default AddToCart;
