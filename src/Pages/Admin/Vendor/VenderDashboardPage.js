import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VendorLayout from "../../../Components/Admin/Vendor/VendorLayout";
import { getSingleShopProduct } from "../../../Redux/product/actions";

const VenderDashboardPage = () => {
  const dispatch = useDispatch();
  const vendorId = useSelector((state) => state.user?.vendorInfo?._id);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getSingleShopProduct(vendorId));
  }, []);

  return (
    <>
      <VendorLayout />
    </>
  );
};

export default VenderDashboardPage;
