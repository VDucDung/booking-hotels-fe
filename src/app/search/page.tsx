/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import HotelCard from "@/components/hotelCard/HotelCard";
import PaginationApp from "@/components/pagination/Pagination";
import ProductFilterTopBar from "@/components/productFilterTopBar/ProductFilterTopBar";
import { useAppDispatch, useAppSelector } from "@/redux";
import { getHotels } from "@/api/hotelService";
import Loading from "@/components/loading";
import Image from "next/image";
import images from "@/assets/images";
import ProductFilterSideBar from "@/components/productFilterSideBar/ProductFilterSideBar";
import { getCategories } from "@/api/categoryService";

function Search() {
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useAppDispatch();
  const { hotels, detailResult, loading, error } = useAppSelector((state) => state.hotels);
  const { categories } = useAppSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getHotels({
      page: currentPage + 1,
      limit: 20,
      sortBy: "",
      keyword: "",
    }));

    dispatch(getCategories());
  }, [dispatch, currentPage]);


  const handlePageChange = ({ selected }: any) => {
    setCurrentPage(selected);
  };

  const addressList = categories.map((item) => {
    return {
      name: item.name as string,
      code: item.id as string

    }
  })

  const categoryList = hotels.map((item) => {
    return {
      label: item.hotel_hotelName,
      image: item.hotel_images[0],
    };
  })

  const initialValues = {
    rating: 1,
    displayOption: "newest",
    maxPrice: "",
    minPrice: "",
    displayOptions: {},
    price: "",
    search: "",
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
    <div
    className="container mx-auto"  
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("products values", values);
        }}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className="container py-14">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3 xl:block hidden">
                  <ProductFilterSideBar
                    values={values}
                    setFieldValue={setFieldValue}
                    addressList={addressList}
                    categoryList={categoryList}
                  />
                </div>

                <div className="xl:col-span-9 col-span-full">
                  <ProductFilterTopBar
                    values={values}
                    setFieldValue={setFieldValue}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hotels?.length > 0 ? ( hotels.map((item) => (
                      <HotelCard key={item?.hotel_id} avgRating={item?.hotel_avg_rating} id={item?.hotel_id} hotelName={item?.hotel_hotelName} address={item.hotel_address} totalReviews={item.hotel_total_reviews} images={item?.hotel_images[0]}  />
                    ))) : (
                      <div className="col-span-3 mt-3">
                        <Image src={images.empty} alt="empty" width={300} height={300} className="mx-auto" />
                        <div className="text-center mt-3">Không tìm thấy nào</div>
                      </div>
                    )}
                  </div>

                  <PaginationApp
                    pageCount={detailResult?.totalPages}
                    onPageChange={handlePageChange}
                    forcePage={currentPage}
                    className="ml-auto mt-10"
                  />
                </div>

                <div className="col-span-full xl:hidden block">
                  <ProductFilterSideBar
                    values={values}
                    setFieldValue={setFieldValue}
                    addressList={addressList}
                    categoryList={categoryList}
                  />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Search;
