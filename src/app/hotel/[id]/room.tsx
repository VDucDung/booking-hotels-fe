/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getTypeRoomByHotelId } from '@/api/typeRoomService';
import { CloseIcon, PlusIcon } from '@/assets/icons';
import IconButton from '@/components/iconButton';
import Loading from '@/components/loading';
import { HotelCredentials } from '@/interfaces';
import { useAppDispatch, useAppSelector } from '@/redux';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
const Room: React.FC<HotelCredentials> = ({ hotel }) => {
  const dispatch = useAppDispatch();
  const { typeRooms, loading, error } = useAppSelector((state) => state.typeRooms);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  useEffect(() => {
    dispatch(getTypeRoomByHotelId({ hotelId: hotel?.id }))

  }, [dispatch, hotel?.id]);


  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % hotel.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + hotel.images.length) % hotel.images.length);
  };

  if (loading) {
    return <Loading className="mt-5 mx-auto" />;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-5">{error}</div>;
  }

  return (
    <section className="min-h-screen bg-gray-100 p-4">
      {typeRooms && typeRooms.length > 0 ? (
        typeRooms.map((typeRoom) => (
          <div className="bg-white shadow-md rounded-lg p-4 flex space-x-12 mb-10" key={typeRoom.id}>
          <div className="flex flex-col space-y-4">
            <Image
              src={typeRoom.rooms[0]?.images[0]}
              alt="Hotel Room"
              width={480}
              height={480}
              className="w-[300px] h-[200px] object-cover rounded-lg"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold">{typeRoom.name}</h2>
              <p className="text-gray-500 text-sm">{typeRoom.description}</p>

              <button
                onClick={openModal}
                className="bg-green-500 text-white px-4 py-2 rounded-md flex justify-center items-center"
              >
                <span>See Room Details</span>  <PlusIcon className="w-6 h-6 ml-2" />
              </button>

              <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Room Details"
                className="bg-white p-6 rounded-lg w-[1200px] mx-auto shadow-lg mt-12"
                overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-black hover:text-gray-300 w-8 h-8 float-right"
                >
                  <CloseIcon className="w-6 h-6" />
                </button>

                <div className="mt-4 flex space-x-12">
                  <div className='flex flex-col flex-1'>
                    <h2 className="text-3xl font-bold">{typeRoom.name}</h2>
                    <p className="text-gray-600 mt-2">
                      <div className='flex'>
                        <div className="flex justify-center p-4 relative">
                          <IconButton
                            className="absolute top-1/2 -translate-y-1/2 left-[0px] hidden sm:flex"
                            iconName="arrowSlider"
                            variant="contained"
                            size="small"
                            bgColor="emerald-500"
                            textColor="white"
                            bgHoverColor="yellow"
                            iconSize={1}
                            onClick={prevImage}
                            disabled={hotel?.images.length <= 1}
                          />
                          <Image
                            src={typeRoom.rooms[selectedImageIndex]?.images[selectedImageIndex]}
                            alt="Selected Gallery Image"
                            className="object-contain max-w-full"
                            width={1000}
                            height={900}
                            quality={100}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'https://res.cloudinary.com/dgyusabsy/image/upload/v1728631167/booking-hotels/nr1gltdqndwuajubmzor.jpg';
                            }}
                          />

                          <IconButton
                            className="rotate-180 absolute top-1/2 -translate-y-1/2 right-[0px] hidden sm:flex"
                            iconName="arrowSlider"
                            variant="contained"
                            size="small"
                            bgColor="emerald-500"
                            textColor="white"
                            bgHoverColor="yellow"
                            iconSize={1}
                            disabled={hotel?.images.length <= 1}
                            onClick={nextImage}
                          />
                        </div>
                      </div>
                    </p>
                  </div>

                  <div>
                    <div className="mt-14 w-[320px]">
                      <h3 className="text-xl font-semibold">Room Information</h3>
                      <ul className="list-disc pl-5 mt-2 text-gray-700">
                        <li>17.0 m²</li>
                        <li>2 guests</li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-xl font-semibold">Room Features</h3>
                      <ul className="list-disc pl-5 mt-2 text-gray-700">
                        <li>Shower</li>
                        <li>Refrigerator</li>
                        <li>Air Conditioning</li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-xl font-semibold">Basic Facilities</h3>
                      <ul className="list-disc pl-5 mt-2 text-gray-700">
                        <li>Free WIFI</li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-xl font-semibold">Room Facilities</h3>
                      <ul className="list-disc pl-5 mt-2 text-gray-700">
                        <li>Air conditioning</li>
                        <li>Electric kettle</li>
                        <li>In-room safe</li>
                        <li>Blackout curtains</li>
                        <li>Heating</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Modal>
            </div>
          </div>

          <div className="flex-1">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-700 text-sm">
                  <th className="px-4 py-2 text-left">Room Option(s)</th>
                  <th className="px-4 py-2">Guest(s)</th>
                  <th className="px-4 py-2">Price/room/night</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {
                  typeRoom.rooms.map((room, index) => (
                    <tr key={index}>
                      <td className="px-4 py-4">
                        <p>{room.roomName}</p>
                        <p className="text-sm text-gray-500">{room.description}</p>
                        {JSON.parse(JSON.stringify(room.options)).map((option: any, index: number) => (
                          <p className="text-sm text-gray-500" key={index}>{option.feature}</p>
                        ))}
                      </td>
                      <td className="px-4 py-4 text-center">{room.capacity}</td>
                      <td className="px-4 py-4 text-center">
                        <span className="line-through text-gray-500">{room.price} VND</span>
                        <p className="text-green-500 font-bold">{Number(room.price) - (Number(room.price) * 10 / 100)} VND</p>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Choose</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
        ))
      ) : (
        <div className="text-center mt-8">
          <div className="text-xl text-gray-600">No hotel information available</div>
        </div>
      )}

    </section>
  );
};

export default Room;
