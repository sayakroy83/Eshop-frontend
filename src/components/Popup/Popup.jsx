import React from 'react';
import { IoCloseOutline } from "react-icons/io5";
import Button from '../Shared/Button';

const Popup = ({ orderPopup, handleOrderPopUp }) => {
  return (
    <>
      {orderPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-[350px] p-6 shadow-lg bg-white dark:bg-gray-900 dark:text-white rounded-xl relative">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-semibold">Order Now</h1>
              <IoCloseOutline onClick={handleOrderPopUp} className="text-2xl cursor-pointer hover:text-red-500" />
            </div>
            
            {/* Form Section */}
            <form className="flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input 
                type="text" 
                placeholder="Address" 
                className="p-3 border rounded-lg dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              />

              {/* Order Button */}
              <div className="flex justify-center mt-4">
                <Button text="Order Now" bgColor="bg-primary" textColor="text-white" />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
