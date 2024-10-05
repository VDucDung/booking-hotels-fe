"use client";
import React, { useEffect } from 'react';
import { Spin, Alert } from 'antd';
import { useDispatch } from 'react-redux';
import { getHotels } from '@/api/hotelService';
import { AppDispatch, useAppSelector } from '@/redux';
import HotelCardList from "@/components/hotelCardList/hotelCardList";
import HotelCard from '@/components/hotelCard/HotelCard';
import Banner from '@/components/banner/Banner';

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, hotels } = useAppSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(getHotels());
  }, []);

  const topRowHotels = hotels?.slice(0, 2) || [];
  const bottomRowHotels = hotels?.slice(2) || [];

  return (
    <section>
      <Banner />
      {
        loading ? (<Spin tip="Đang tải dữ liệu..." className='flex justify-center items-center' />) :
          (
            <>
              {error ? (<Alert message="Đã xảy ra lỗi" description={error} type="error" showIcon />) :
                (
                  <>
                    <HotelCardList hotels={topRowHotels} />
                    <div className="space-y-3 container mx-auto">
                      <h2 className="text-3xl font-bold">Latest Destinations</h2>
                      <p>Most recent destinations added by our hosts</p>
                      <div className="grid gap-4">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                          {topRowHotels.map((hotel) => (
                            <HotelCard key={hotel.id}
                              hotelName={hotel.hotelName}
                              address={hotel.address}
                              reviews={hotel.reviews}
                              images={hotel.images[0]}
                              id={hotel.id}
                            />
                          ))}
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                          {bottomRowHotels.map((hotel) => (
                            <HotelCard key={hotel.id}
                              hotelName={hotel.hotelName}
                              address={hotel.address}
                              reviews={hotel.reviews}
                              images={hotel.images[0]}
                              id={hotel.id}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
            </>
          )
      }

    </section>
  );
}
