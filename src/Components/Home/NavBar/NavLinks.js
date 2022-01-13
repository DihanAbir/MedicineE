import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <Fragment>
      <li>
        <Link
          to="/allshop"
          aria-label="Registered Shop"
          title="Registered Shop"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-700"
        >
          Shop
        </Link>
      </li>
      <li>
        <a
          href="#offers"
          aria-label="Our product"
          title="Our product"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-700"
        >
          Features
        </a>
      </li>
      <li>
        <Link
          to="/medicine"
          aria-label="Our Medicine"
          title="Our Medicine"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-700"
        >
          Medicine
        </Link>
      </li>
      <li>
        <a
          href="#blogs"
          aria-label="Latest Blog"
          title="Latest Blog"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-teal-accent-700"
        >
          Blog
        </a>
      </li>
    </Fragment>
  );
};

export default NavLinks;
