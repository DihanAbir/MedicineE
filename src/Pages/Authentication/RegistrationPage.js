import React, { useEffect, Fragment } from 'react';
import Registration from '../../Components/Home/Registration/Registration';
import { Helmet } from "react-helmet";

const RegistrationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>Register Here</title>
        <meta name="Register Here" content="E-Pharmacy Registration page" />
      </Helmet>
      <Registration />
    </Fragment>
  );
};

export default RegistrationPage;
