/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from 'react'; 
import { useAppDispatch, useAppSelector } from '@/redux';
import { getHotel } from '@/api/hotelService';
import Loading from '@/components/loading';
import { HotelCredentials } from '@/interfaces';
import ImageGallery from '@/components/imageGallery/ImageGallery';
import { Button, Rate } from 'antd';
import { LocationIcon } from '@/assets/icons';
import CustomButton from '@/components/button/CustomButton';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { createFavorite, removeFavorite } from '@/api/favoriteService';
import { toast } from 'react-toastify';
const Overview: React.FC<HotelCredentials> = ({ hotelId }) => {
  const dispatch = useAppDispatch();
  const { hotel, loading, error } = useAppSelector((state) => state.hotels);
  
  const [showFullDescription, setShowFullDescription] = useState(false);

  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    const hotelCredentials: HotelCredentials = { hotelId };
    dispatch(getHotel(hotelCredentials));
  }, [dispatch, hotelId]);

  if (loading) {
    return <Loading className="mt-5 mx-auto" />;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-5">{error}</div>;
  }

  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); 
    if(isLiked){
      dispatch(removeFavorite({hotelId})).then((result: any) => {
        if(result.payload.statusCode === 200){
          setIsLiked(false)
          toast.success(result.payload.message);
        }
      });
    }else{
      dispatch(createFavorite({hotelId})).then((result: any) => {
        if(result.payload.statusCode === 201){
          setIsLiked(true)
          toast.success(result.payload.message);
        }
      });
    }
  };

  return (
    <section className="flex flex-col min-h-screen bg-gray-100">
      {hotel ? (
        <div className="container mx-auto px-4 py-8">
          <ImageGallery images={hotel.images} className="mb-8" />
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold mb-4">{hotel.hotelName}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold mb-3"><Rate disabled value={hotel.avgRating || 0}/></h2>
                <div className="mt-4">
                  <p className="text-gray-600 flex">
                    {hotel.address} <LocationIcon className="w-4 h-4 ml-1"/>
                  </p>
                </div>
              </div>
              <div className='grid grid-cols-4'>
                <div className='col-start-3'>
                    <Button
                      type="text"
                      onClick={handleLike}
                      icon={isLiked ? <HeartFilled style={{ color: 'red', fontSize: '32px' }} />: <HeartOutlined style={{ fontSize: '32px' }} />}
                      style={{
                        position: 'relative',
                        top: 10,
                        right: -20,
                        width: 40,
                        height: 40,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    />
                </div>
                <div className='col-start-4'>
                  <CustomButton className='w-[140px] h-[50px]'>
                    Select room
                  </CustomButton>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-600">
                {showFullDescription ? hotel.description : `${hotel.description && hotel.description.substring(0, 100)}...`} 
              </p>
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-blue-500 hover:underline mt-2"
              >
                {showFullDescription ? 'Xem ít hơn' : 'Xem thêm'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-8">
          <div className="text-xl text-gray-600">No hotel information available</div>
        </div>
      )}
    </section>
  );
};

export default Overview;
