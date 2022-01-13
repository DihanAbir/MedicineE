import React, { useEffect, Fragment } from 'react';
import LoginForm from '../../Components/Home/Login/LoginForm';
import {Helmet} from "react-helmet";

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>Login Here</title>
        <meta name="Login Here" content="E-Pharmacy login page"/>
      </Helmet>
      <LoginForm />
    </Fragment>
  );
};

export default LoginPage;
