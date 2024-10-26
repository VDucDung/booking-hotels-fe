"use client";

import React, { useCallback, useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";
import clsx from "clsx";
import IconButton from "../iconButton";
import { HotelCardListProps } from "@/interfaces/hotel";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Loading from "../loading";
import { getHotels } from "@/api/hotelService";
import HotelCard from "../hotelCard";

const RelatedProducts: React.FC<HotelCardListProps> = () => {
  const slider = useRef<Slider | null>(null);
  const dispatch = useAppDispatch();
  const { hotels, loading, error } = useAppSelector((state) => state.hotels);

  const fetchHotels = useCallback(() => {
    dispatch(getHotels({
      page: 1,
      limit: 20,
      sortBy: "createdAt:desc",
      keyword: "",
    }));
  }, [dispatch]);

  useEffect(() => {
    fetchHotels();
  }, [fetchHotels]);

  const settings: Settings = {
    infinite: true,
    speed: 500,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return <Loading className="mt-5 mx-auto" />;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center mt-5">
        {error}
      </div>
    );
  }

  return (
    <section className={clsx("container sm:mt-14 mt-10")}>
      {
        hotels?.length > 0 ? (<div className="relative">
          <IconButton
            className="absolute top-1/2 -translate-y-1/2 left-[-20px] hidden sm:flex z-[999]"
            iconName="arrowSlider"
            variant="contained"
            size="small"
            bgColor="emerald-500"
            textColor="white"
            bgHoverColor="yellow"
            iconSize={1.5}
            onClick={() => {
              slider.current?.slickPrev();
            }}
          />

          <IconButton
            className="rotate-180 absolute top-1/2 -translate-y-1/2 right-[-20px] hidden sm:flex z-[999]"
            iconName="arrowSlider"
            variant="contained"
            size="small"
            bgColor="emerald-500"
            textColor="white"
            bgHoverColor="yellow"
            iconSize={1.5}
            onClick={() => {
              slider.current?.slickNext();
            }}
          />

          <Slider ref={slider} {...settings}>
            {hotels.map((hotel) => (
              <div key={hotel.id} className="py-2">
                <HotelCard
                  id={hotel.id}
                  hotelName={hotel.hotelName}
                  avgRating={hotel.avgRating}
                  totalReviews={hotel.totalReviews || 0}
                  images={hotel?.images[0]}
                  address={hotel.address}
                  favorites={hotel.favorites.length > 0 ? true : false}
                  onLikeSuccess={fetchHotels}
                  className="h-[420px]"
                />
              </div>
            ))}
          </Slider>
        </div>) : (
          <div className="text-center font-bold text-2xl mt-5">No Data</div>
        )}
    </section>
  );
};

export default RelatedProducts;
