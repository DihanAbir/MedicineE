import React, { Fragment } from 'react';
import Footer from '../../Components/Home/Footer/Footer';
import NavBar from '../../Components/Home/NavBar/NavBar';
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "What's the best thing about E-Pharmacy?",
    answer:
      "E-Pharmacy is a business model that deals with the preparation and sale of prescription and non-prescription medicine as in traditional pharmacies. However, online pharmacies take orders online and send the medicine to their destination. A system that stores data and enables functionality that organizes and maintains the customer, transactions, and medication use the process within pharmacies.",
  },
  {
    question: "How E-Pharmacy is different from other online pharmacies?",
    answer:
      "At E-Pharmacy, we deliver the medicines in the utmost quality and package integrity in the market. Summing up with the offers and discounts on all products makes E-Pharmacy a sensible option. Also, we handle only the products which are licensed by the government.",
  },
  {
    question: "What locations in Bangladesh does E-Pharmacy deliver?",
    answer:
      "We deliver all across India, Ranging to almost 26,000+ pin codes.",
  },

  {
    question: "How can I contact E-Pharmacy",
    answer:
      "Refer to the contact us section of the website for contact detail or you can contact us at “contact@ E-Pharmacy”.",
  },
  {
    question: "How can I contact the pharmacists of E-Pharmacy?",
    answer:
      "Refer to the contact us section of the website for contact detail or you can contact us at “contact@E-Pharmacy”. You can also call to our contact number (+91 75300 11585) and request a callback from the pharmacist.",
  },
  {
    question: "DoesE-Pharmacy accept any insurance plans?",
    answer:
      "No, we do not accept any insurance plans. However, we provide you the receipt and invoice for all orders which you can use to claim for any insurance.",
  },
  {
    question: "Should I worry about the quality of medicines while ordering?",
    answer:
      "You don’t have to worry about the quality of the product. We sell only the products licensed by the government. We primarily deal with only the multinational brands with a good reputation.",
  },
  {
    question: "Are there any discounts and offers in E-Pharmacy?",
    answer:
      "All of our products have a discounted price. Moreover, there will be always different offers and discounts over a period of time. Kindly read the offer description for the eligibility to utilize it.",
  },
  {
    question: "How to upload a prescription?",
    answer:
      "During ordering, our website will prompt you to upload a prescription.",
  },
  {
    question: "How long will it take for my order to reach me?",
    answer:
      "The general time taken for the product you ordered to reach you is less than 48 hours. However, because of some reasons that are out of our hands, the delivery may be delayed in a very rare case. In such a delay we suggest you wait patiently. You can also contact us for any assistance.",
  },
  {
    question: "How can I check the delivery status of my order?",
    answer:
      "You will receive a mail with tracking details after ordering. You can use it to track your shipment.",
  },
  {
    question: "How can I cancel an order?",
    answer:
      "You can cancel an order using the direct link or by reaching us with a mail or call. The order can be canceled only before dispatching.",
  },


]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const FAQ = () => {
    return (
      <Fragment>
        <NavBar/>
        

        {/*  FAQ  */}
         <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
              <h2 className="text-center text-3xl font-bold text-teal-700 sm:text-4xl">Frequently asked questions</h2>
              <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                {faqs.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt className="text-lg">
                          <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                            <span className="font-medium text-gray-900">{faq.question}</span>
                            <span className="ml-6 h-7 flex items-center">
                              <ChevronDownIcon
                                className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                aria-hidden="true"
                              />
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base text-gray-600">{faq.answer}</p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer/>

      </Fragment>
    );
};

export default FAQ;