import React from 'react';
import NavBar from '../../Home/NavBar/NavBar';
import PreviousOrders from './PreviousOrders/PreviousOrders';
import UserProfile from './UserProfile/UserProfile';
import Footer from '../../Home/Footer/Footer'
import ActiveOrder from './ActiveOrder/ActiveOrder';

const UserDashboard = () => {
  return (
    <>
      <NavBar/>
      <UserProfile/>
      <ActiveOrder/>
      <PreviousOrders/>
      <Footer/>
    </>
  );
};

export default UserDashboard;