import React, {Fragment} from 'react';
import NavBar from '../../Components/Home/NavBar/NavBar';
import Footer from '../../Components/Home/Footer/Footer'

const HelpResources = () => {
    return (
      <Fragment>
        <NavBar />
        <div className="p-6 overflow-hidden md:container md:mx-auto">
          <h1 className="text-3xl font-bold">Help & Resources</h1>
          <div className="container p-5 border-2">
            <h3 className="mt-5 text-xl font-bold">Orders</h3>
            <p>
              We at E-Pharmacy are bound to honour all orders that come
              through our Website and Application. In some cases, we do accept
              orders through other mediums like E-mail, Telephone, Whatsapp,
              Text messages and others. However, in all cases E-Pharmacy
              reserves the right to honour or cancel any order with or without
              notice and without any liability. Any order of prescribed
              medicines and equipment without a doctor prescription will be
              cancelled with or without notice.
            </p>
            <h3 className="mt-5 text-xl font-bold">Returns</h3>
            <p>
              We at E-Pharmacy take utmost effort to deliver the products
              in its best J possible, however, if the customer is not
              satisfied with the product quality our return policy entitles the
              particular customer to return back the product (Applicable only
              for certain products). We take the returned product and will issue
              a return notice and the refund will be initiated to the online
              user account in E-Pharmacy which can be used for subsequent
              purchases. Products wrongly delivered by us will be eligible for a
              return, products which have expired when delivered are also
              eligible for return. However, any damages after or during delivery
              will not be eligible for return.
            </p>
          </div>
        </div>

        <Footer/>
      </Fragment>
    );
};

export default HelpResources;