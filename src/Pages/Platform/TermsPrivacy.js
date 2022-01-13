import React, {Fragment} from 'react';
import Footer from '../../Components/Home/Footer/Footer';
import NavBar from "../../Components/Home/NavBar/NavBar";

const TermsPrivacy = () => {
    return (
      <Fragment>
        <NavBar />
        <div className="p-6 overflow-hidden md:container md:mx-auto">
          <h1 className="text-xl font-bold">PRIVACY POLICY</h1>
          <div className="container p-5 border-2">
            <p>
              SMV Healthcare Private Limited. is the licensed owner of the
              E-Pharmacy and the website E-Pharmacy.com (”The Site”) is
              from SMV Healthcare Private Limited. SMVHPL respects your privacy.
              As a visitor to the Site/ Customer, you are advised to kindly read
              the Privacy Policy carefully. By accessing the services provided
              by the Site you agree to the collection and use of your data by
              SMVHPL in the manner provided in this Privacy Policy.
            </p>
            <h3 className="mt-5 text-xl font-bold">User Information</h3>
            <p>
              The registration process of SMVHPL includes collecting the
              following personal details about you such as your name (including
              first and last name), Age, Gender, Occupation, Education, Address,
              E-mail id, Contact numbers (Land Line and Mobile), alternate email
              address, and information about the pages on the site you
              visit/access, the links you click on the site, the number of times
              you access the page and any such browsing information.
            </p>
            <h3 className="mt-5 text-xl font-bold">Security</h3>
            <p>
              We are committed to ensuring that your information is secure. In
              order to prevent unauthorized access or disclosure, we have put in
              place suitable physical, electronic and managerial procedures to
              safeguard and secure the information we collect online.
            </p>
            <h3 className="mt-5 text-xl font-bold">Cookies</h3>
            <p>
              A cookie is a small file which asks permission to be placed on
              your computer's hard drive. Once you agree, the file is added and
              the cookie helps analyze web traffic or lets you know when you
              visit a particular site. Cookies allow web applications to respond
              to you as an individual. The web application can tailor its
              operations to your needs, likes, and dislikes by gathering and
              remembering information about your preferences. We use traffic log
              cookies to identify which pages are being used. This helps us
              analyze data about web page traffic and improve our website in
              order to tailor it to customer needs. We only use this information
              for statistical analysis purposes and then the data is removed
              from the system. Overall, cookies help us provide you with a
              better website, by enabling us to monitor which pages you find
              useful and which you do not. A cookie in no way gives us access to
              your computer or any information about you, other than the data
              you choose to share with us. You can choose to accept or decline
              cookies. Most web browsers automatically accept cookies, but you
              can usually modify your browser setting to decline cookies if you
              prefer. This may prevent you from taking full advantage of the
              website.
            </p>
            <h3 className="mt-5 text-xl font-bold">Links to other websites</h3>
            Our website may contain links to other websites of interest.
            However, once you have used these links to leave our site, you
            should note that we do not have any control over that other website.
            Therefore, we cannot be responsible for the protection and privacy
            of any information which you provide whilst visiting such sites and
            such sites are not governed by this privacy statement. You should
            exercise caution and look at the privacy statement applicable to the
            website in question.
            <h3 className="mt-5 text-xl font-bold">Information Security</h3>
            <p>
              We will not sell, distribute or lease your personal information to
              third parties unless we have your permission or are required by
              law to do so. We may use your personal information to send you
              promotional information about third parties which we think you may
              find interesting if you tell us that you wish this to happen. You
              may request details of personal information which we hold about
              you under the Data Protection Act 1998. A small fee will be
              payable. If you would like a copy of the information held on you
              please email us this request using our Contact Us information. If
              you believe that any information we are holding on you is
              incorrect or incomplete, please write to or email us as soon as
              possible, at the above address. We will promptly correct any
              information found to be incorrect.
            </p>
          </div>
        </div>

        <Footer/>
      </Fragment>
    );
};

export default TermsPrivacy;