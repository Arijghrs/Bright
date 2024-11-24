import React, { useState } from 'react';
import course from '../assets/Rectangle 976.png';
import Rating from '../components/Rating';
import credit from "../assets/Group 8888.png";
import paypal from "../assets/Group 8889.png";
import mastercard from "../assets/mastercard 1.png";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState(''); // Default to empty string to hide inputs initially

  const handleCheckboxChange = (method) => {
    setPaymentMethod(method); // Update payment method based on checkbox
  };

  return (
    <div className="flex justify-between mx-10 my-14">
      <div className="w-2/3 pr-10">
        <h1 className="text-3xl font-montserrat font-bold">Check Out</h1>
        <p className="text-2xl mt-4">Order details</p>

        <div className="w-[500px] border-t border-b border-gray-300 py-4 flex items-center space-x-4 mt-4">
          <img src={course} className="w-24 h-24 object-cover" />
          <div>
            <p className="text-lg font-semibold text-[#2C3439]">Introduction to Web Development 101</p>
            <p className="text-[#2C343969]">Jane Doe</p>
            <Rating rate={3.5} />
          </div>
        </div>

        <div>
          <p className="text-2xl mt-4">Payment Methods</p>
          <div className="w-[636px]">
            <table className="w-full mt-4 bg-gray-100 border border-gray-300">
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="p-4 h-[67px]">
                    <label className="flex justify-between items-center space-x-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-5 w-5 text-purple-600"
                          checked={paymentMethod === 'credit'}
                          onChange={() => handleCheckboxChange('credit')}
                        />
                        <span className="text-lg ml-4">Credit/Debit Card</span>
                      </div>
                      <img src={credit} alt="credit" />
                    </label>

                    {/* Conditionally render Credit/Debit Card fields */}
                    {paymentMethod === 'credit' && (
                      <div className="mt-4 space-y-4">
                        <div>
                          <label className="block text-lg font-inter mt-10">Cardholder’s Name</label>
                          <input
                            type="text"
                            className="w-[609px] border border-gray-300 p-2"
                            onChange={(e) => {
                              e.target.value = e.target.value.toUpperCase();
                            }}
                          />
                        </div>
                        <div>
                          <label className="block text-lg font-inter">Card Number</label>
                          <div className="relative w-[609px]">
                            <img
                              src={mastercard}
                              alt="MasterCard"
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-8"
                            />
                            <input
                              type="text"
                              className="w-full border border-gray-300 pl-16 p-2"
                              placeholder="Enter your card number"
                              maxLength={19} 
                              onChange={(e) => {
                                let value = e.target.value.replace(/\D/g, ''); 
                                value = value.replace(/(\d{4})(?=\d)/g, '$1 '); 
                                e.target.value = value;
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex space-x-4">
                          <div>
                            <label className="block text-lg font-inter">Expiry</label>
                            <input
                              type="text"
                              className="w-[300px] border border-gray-300 p-2"
                              placeholder="MM/YY"
                              maxLength={5}
                              onChange={(e) => {
                                let value = e.target.value.replace(/\D/g, ''); 
                                if (value.length >= 3) {
                                  value = value.slice(0, 2) + '/' + value.slice(2, 4); 
                                }
                                e.target.value = value;
                              }}
                            />
                          </div>
                          <div>
                            <label className="block text-lg font-inter">CVC</label>
                            <input
                              type="text"
                              className="w-[300px] border border-gray-300 p-2"
                              maxLength={3}
                              onChange={(e) => {
                                e.target.value = e.target.value.replace(/\D/g, '');
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="p-4 h-[67px]">
                    <label className="flex justify-between items-center space-x-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox h-5 w-5 text-purple-600"
                          checked={paymentMethod === 'paypal'}
                          onChange={() => handleCheckboxChange('paypal')}
                        />
                        <span className="text-lg ml-4">PayPal</span>
                      </div>
                      <img src={paypal} alt="paypal" />
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="w-[300px] h-[586px] border mr-14 border-gray-300 p-10">
        <p className="font-montserrat text-2xl mb-4">Summary</p>
        <hr className="border-gray-300 my-4" />
        <div className="space-y-2 mb-14">
          <div className="flex justify-between">
            <p className="text-lg">Total</p>
            <p className="text-lg text-right">48.00 dt</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg">Discount</p>
            <p className="text-lg text-right">-00.00 dt</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg">Tax</p>
            <p className="text-lg text-right">0%</p>
          </div>
        </div>

        <hr className="border-gray-300 my-4" />

        <p className="font-montserrat text-lg mb-4">Promo Code</p>
        <div className="relative w-[222px] h-[52px]">
          <input
            placeholder='Enter your code'
            className='border border-black w-full h-full pl-3 pr-14'
          />
          <button className="absolute top-1/2 right-2 transform -translate-y-1/2 w-6 h-6 border border-black rounded-lg text-black flex items-center justify-center">
            &gt;
          </button>
        </div>

        <hr className="border-gray-300 my-6" />

        <div className="flex justify-between">
          <p className="text-lg">Total</p>
          <p className="text-lg text-right">48.00 dt</p>
        </div>

        <button className="w-[222px] h-[52px] bg-[#B8B5FF] text-[16px] font-montserrat mt-8">
          Continue to payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
