"use client";
import React, { useEffect } from 'react';
import { Spin, Alert } from 'antd';
import { useDispatch } from 'react-redux';
import { getHotels } from '@/api/hotelService';
import { AppDispatch, useAppSelector } from '@/redux';
import Banner from "@/components/banner/Banner";
import HotelCardList from "@/components/hotelCardList/hotelCardList";
import HotelCard from '@/components/hotelCard/HotelCard';

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  
  const loading = useAppSelector((state) => state.hotels.loading);
  const hotels = useAppSelector((state) => state.hotels.hotels);
  const error = useAppSelector((state) => state.hotels.error);

  useEffect(() => {
    dispatch(getHotels());
  }, [dispatch]);

  if (loading) {
    return <Spin tip="Đang tải dữ liệu..." />;
  }

  if (error) {
    return <Alert message="Lỗi" description={error} type="error" showIcon />;
  }

  const topRowHotels = hotels?.slice(0, 2) || [];
  const bottomRowHotels = hotels?.slice(2) || [];

  return (
    <section>
      <Banner />
      <HotelCardList hotels={topRowHotels} />
      <div className="space-y-3 container mx-auto">
        <h2 className="text-3xl font-bold">Latest Destinations</h2>
        <p>Most recent destinations added by our hosts</p>
        <div className="grid gap-4">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {topRowHotels.map((hotel) => (
              <HotelCard key={hotel.id} {...hotel} />
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {bottomRowHotels.map((hotel) => (
              <HotelCard key={hotel.id} {...hotel} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
