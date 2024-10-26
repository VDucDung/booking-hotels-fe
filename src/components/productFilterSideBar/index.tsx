"use client";
import React from "react";
import clsx from "clsx";
import FormikTextField from "../formik/FormikTextField";
import Icon from "../icon";
import Divider from "../devider";
import Image from "next/image";
import CustomButton from "../button/CustomButton";
import FormikCheckBox from "../formik/FormikCheckBox";
import { useAppDispatch } from "@/redux";
import { getHotels } from "@/api/hotelService";
import { Form, Formik } from "formik";
import { ProductFilterSideBarProps } from "@/interfaces/productFilterSideBar";
import Accordion from "../accordion";

const ProductFilterSideBar: React.FC<ProductFilterSideBarProps> = ({
  categoryList,
  addressList,
}) => {
  const ratings = [1, 2, 3, 4, 5];
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearch = (values: any) => {
    const { search, minPrice, maxPrice , category, address, rating} = values;
    console.log(search, minPrice, maxPrice , category, address, rating);

      dispatch(getHotels({
        page: 1,
        limit: 20,
        sortBy: "",
        keyword: values.search,
      }));
  };

  return (
    <Formik
      initialValues={{
        search: "",
        minPrice: "",
        maxPrice: "",
        category: "",
        address: [],
        rating: null,
      }}
      onSubmit={handleSearch}
    >
      {({ values, setFieldValue, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="xl:h-[120px] h-fit flex items-center xl:mt-0 mt-10">
              <FormikTextField
                name="search"
                rightIcon={<Icon name="search" color="white"/>}
                rightIconClassName="bg-emerald-500"
                label="Tìm kiếm"
                inputClassName="rounded"
              />
            </div>

            <div className="p-4 border rounded-md shadow-md bg-white py-6">
              <div className="flex items-center gap-2">
                <Icon name="category" size={1.5} />
                <h3 className="text-2xl font-medium text-black mb-0">
                  Danh mục khách sạn
                </h3>
              </div>

              <Divider color="black" marginTop="10px" />

              <Accordion minHeight="240px" buttonClassName="text-emerald-500">
                {categoryList.map(({ label, image }) => (
                  <div
                    key={label}
                    onClick={() => setFieldValue("category", label)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center gap-3 p-2">
                      <div className="w-[30px] h-[30px]">
                        <Image src={image} alt={label} width={30} height={30} />
                      </div>
                      <p
                        className={clsx("text-lg font-normal mb-0", {
                          "text-yellow": values.category === label,
                        })}
                      >
                        {label}
                      </p>
                    </div>
                    <Divider color="white-100" />
                  </div>
                ))}
              </Accordion>
            </div>

            <div className="p-4 border rounded-md shadow-md bg-white py-6">
              <div className="flex items-center gap-2">
                <Icon name="coin" size={1.5} color="black" />
                <h3 className="text-2xl font-medium text-black mb-0">Giá khách sạn</h3>
              </div>

              <Divider color="black" marginTop="10px" />

              <div className="flex items-center mt-12">
                <div className="flex-1">
                  <FormikTextField
                    name="minPrice"
                    rightIconClassName="bg-emerald-500"
                    label="Giá tối thiểu"
                    inputClassName="rounded text-base"
                    labelClassName="text-base rounded"
                  />
                </div>

                <div
                  className="mx-4 text-xl font-semibold text-gray-600 p-2 rounded-full"
                  style={{ minWidth: "2rem" }}
                >
                  -
                </div>

                <div className="flex-1">
                  <FormikTextField
                    name="maxPrice"
                    rightIconClassName="bg-emerald-500"
                    label="Giá tối đa"
                    inputClassName="text-base"
                    labelClassName="text-base"
                  />
                </div>
              </div>

              <CustomButton
                bgColor="emerald-500"
                bgHoverColor="yellow"
                full
                className="mt-5 hover:text-black"
              >
                Áp dụng
              </CustomButton>
            </div>

            <div className="p-4 border rounded-md shadow-md bg-white py-6">
              <div className="flex items-center gap-2">
                <Icon name="vendor" size={1.5} />
                <h3 className="text-2xl font-medium text-black mb-0">Khu vực</h3>
              </div>

              <Divider color="text-black" marginTop="10px" />

              <Accordion minHeight="180px" buttonClassName="text-emerald-500">
                <div className="mt-3 ml-2">
                  {addressList.map(({ name, code }) => (
                    <FormikCheckBox key={code} label={name} name={`address.${code}`} />
                  ))}
                </div>
              </Accordion>
            </div>

            <div className="p-4 border rounded-md shadow-md bg-white py-6">
              <div className="flex items-center gap-2">
                <Icon name="rating" size={1.5} color="black" />
                <h3 className="text-2xl font-medium text-black mb-0">Đánh giá</h3>
              </div>

              <Divider color="black" marginTop="10px" />

              <div className="flex flex-col gap-2 mt-3">
                {ratings
                  .slice()
                  .reverse()
                  .map((rating) => (
                    <label key={rating} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        value={rating}
                        checked={values.rating === rating}
                        onChange={() => setFieldValue("rating", rating)}
                        className="sr-only"
                        aria-label={`Rating ${rating} stars`}
                      />
                      <div className="flex items-center gap-1">
                        {[...Array(rating)].map((_, i) => (
                          <Icon
                            key={i}
                            name="starContained"
                            size={1.5}
                            color={values.rating === rating ? "yellow-500" : "emerald-500"}
                          />
                        ))}
                        {[...Array(5 - rating)].map((_, i) => (
                          <Icon
                            key={i}
                            name="starEmpty"
                            size={1.5}
                            color={values.rating === rating ? "yellow-500" : "emerald-500"}
                          />
                        ))}
                      </div>
                      <span className="text-lg text-black font-medium ml-2">
                        {rating === 5 ? "" : "Trở lên"}
                      </span>
                    </label>
                  ))}
              </div>

              <Divider color="black" marginTop="20px" marginBottom="20px" />

              <CustomButton
                bgColor="emerald-500"
                bgHoverColor="yellow"
                full
                className="hover:text-black"
                type="submit"
              >
                Tìm kiếm
              </CustomButton>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProductFilterSideBar;
