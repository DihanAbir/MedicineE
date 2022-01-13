import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './Components/Products/Products';
import PrivateRoute from './Helpers/PrivateRoute';
import VenderDashboardPage from './Pages/Admin/Vendor/VenderDashboardPage';
import LoginPage from './Pages/Authentication/LoginPage';
import RegistrationPage from './Pages/Authentication/RegistrationPage';
import CheckoutPage from './Pages/Checkout/CheckoutPage';
import Home from './Pages/Home/Home';
import OrderHistory from './Pages/OrderHistory/OrderHistory';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import AllShop from './Pages/Shop/AllShop';
import CreateShop from './Pages/Shop/CreateShop';
import Blog from './Components/Home/Blog/Blog';
import Company from './Pages/About/Company';
import Career from './Pages/About/Career';
import ContactSupport from './Pages/Support/ContactSupport';
import HelpResources from './Pages/Support/HelpResources';
import ReleaseUpdate from './Pages/Support/ReleaseUpdate';
import FAQ from './Pages/Platform/FAQ';
import Pricing from './Pages/Platform/Pricing';
import TermsPrivacy from './Pages/Platform/TermsPrivacy';
import ShopDetailsPage from './Pages/Shop/ShopDetailsPage';
import ProcessPayment from './Pages/Payment/ProcessPayment';
import UserDashboard from './Components/Admin/User/UserDashboard';
import EditUserInfo from './Components/Admin/User/EditUserInfo/EditUserInfo';

const Navigation = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/registration">
            <RegistrationPage />
          </Route>
          <Route path="/shopDetails/:vendorId">
            <ShopDetailsPage />
          </Route>
          <PrivateRoute path="/checkout">
            <CheckoutPage />
          </PrivateRoute>
          <Route exact path="/productDetails/:productId">
            <ProductDetails />
          </Route>
          <PrivateRoute exact path="/vendor/:panel">
            <VenderDashboardPage />
          </PrivateRoute>
          <Route path="/allShop">
            <AllShop></AllShop>
          </Route>
          <Route path="/medicine">
            <Products></Products>
          </Route>
          <PrivateRoute path="/orderHistory">
            <OrderHistory></OrderHistory>
          </PrivateRoute>

          <Route path="/createShop">
            <CreateShop />
          </Route>
          <Route path="/blogs">
            <Blog />
          </Route>
          <Route exact path="/company">
            <Company />
          </Route>
          <Route exact path="/career">
            <Career />
          </Route>
          <Route exact path="/contact">
            <ContactSupport />
          </Route>
          <Route exact path="/resources">
            <HelpResources />
          </Route>
          <Route exact path="/release-update">
            <ReleaseUpdate />
          </Route>
          <Route exact path="/FAQ">
            <FAQ />
          </Route>
          <Route exact path="/pricing">
            <Pricing />
          </Route>
          <Route exact path="/terms&privacy">
            <TermsPrivacy />
          </Route>
          <Route exact path="/payment">
            <ProcessPayment/>
          </Route>
          <Route exact path="/userDashboard">
            <UserDashboard/>
          </Route>
          <Route exact path="/editUserInfo">
            <EditUserInfo/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Navigation;
