"use client";

import React, { useState } from 'react';

const HotelRequestForm = () => {
  const [showBedOptions, setShowBedOptions] = useState(false);
  const [showOthersInput, setShowOthersInput] = useState(false);
  const [showCheckInInput, setShowCheckInInput] = useState(false);
  const [showCheckOutInput, setShowCheckOutInput] = useState(false);

  const handleBedTypeClick = () => {
    setShowBedOptions(!showBedOptions);
  };

  const handleOthersCheckbox = () => {
    setShowOthersInput(!showOthersInput);
  };

  const handleCheckInClick = () => {
    setShowCheckInInput(!showCheckInInput);
  };

  const handleCheckOutClick = () => {
    setShowCheckOutInput(!showCheckOutInput);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Let us know if you have any request</h2>
      <p className="text-gray-500 mb-4">
        You will know the availability of your additional request during check-in. Extra charges may incur but you can still cancel your request later.
      </p>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 form-checkbox text-blue-500" />
            Non-smoking Room
          </label>
        </div>
        <div>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 form-checkbox text-blue-500" />
            Connecting Rooms
          </label>
        </div>
        <div>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 form-checkbox text-blue-500" />
            High Floor
          </label>
        </div>
        <div>
          <label className="flex items-center cursor-pointer" >
          <input type="checkbox" className="mr-2 form-checkbox text-blue-500" onClick={handleBedTypeClick}/>
            Bed Type
          </label>
          {showBedOptions && (
            <div className="mt-2 ml-2">
              <label className="flex items-center">
                <input type="radio" name="bed-type" className="mr-2 form-radio text-blue-500" />
                2 Single Beds
              </label>
              <label className="flex items-center">
                <input type="radio" name="bed-type" className="mr-2 form-radio text-blue-500" />
                1 Large Bed
              </label>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="flex items-center cursor-pointer" >
          <input type="checkbox" className="mr-2 form-checkbox text-blue-500" onClick={handleCheckInClick} />
            Check-in Time
          </label>
          {showCheckInInput && (
            <input type="text" placeholder="15:00" className="border rounded px-3 py-2 w-full mt-2" />
          )}
        </div>
        <div>
          <label className="flex items-center cursor-pointer" >
          <input type="checkbox" className="mr-2 form-checkbox text-blue-500" onClick={handleCheckOutClick}/>
            Check-out Time
          </label>
          {showCheckOutInput && (
            <input type="text" placeholder="12:00" className="border rounded px-3 py-2 w-full mt-2" />
          )}
        </div>
      </div>

      <div className="mt-4">
        <label className="flex items-start">
          <input
            type="checkbox"
            className="mr-2 form-checkbox text-blue-500 mt-1"
            onChange={handleOthersCheckbox}
          />
          <span>Others</span>
        </label>
        {showOthersInput && (
          <textarea
            placeholder="This section must be filled."
            className="border rounded px-3 py-2 w-full mt-2"
            rows={3}
          />
        )}
      </div>
    </div>
  );
};

export default HotelRequestForm;
