/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { FormikProps } from "formik";
import clsx from "clsx";
import FormikTextField from "../formik/FormikTextField";
import Icon from "../icon";
import Divider from "../devider/Devider";
import Accordion from "../accordion/Accordion";
import Image from "next/image";
import CustomButton from "../button/CustomButton";
import FormikCheckBox from "../formik/FormikCheckBox";

interface Category {
  label: string;
  image: string;
}

interface Brand {
  name: string;
  code: string;
}

interface ProductFilterSideBarProps {
  values: {
    search?: string;
    category?: string;
    minPrice?: string;
    maxPrice?: string;
    rating?: number | null;
  };
  setFieldValue: FormikProps<any>['setFieldValue'];
  categoryList: Category[];
  brandList: Brand[];
}

const ProductFilterSideBar: React.FC<ProductFilterSideBarProps> = ({
  values,
  setFieldValue,
  categoryList,
  brandList,
}) => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <div className="space-y-4">
      {/* Tìm kiếm */}
      <div className="xl:h-[120px] h-fit flex items-center xl:mt-0 mt-10">
        <FormikTextField
          name="search"
          rightIcon={<Icon name="search" color="white" />}
          rightIconClassName="bg-emerald"
          label="Tìm kiếm"
          inputClassName="rounded"
        />
      </div>

      {/* Danh mục sản phẩm */}
      <div className="p-4 border rounded-md shadow-md bg-white py-6">
        <div className="flex items-center gap-2">
          <Icon name="category" size={1.5} />
          <h3 className="text-2xl font-medium text-black mb-0">Danh mục sản phẩm</h3>
        </div>

        <Divider color="dark-300" marginTop="10px" />

        <Accordion minHeight="240px" buttonClassName="text-emerald">
          {categoryList.map(({ label, image }) => (
            <div
              key={label}
              onClick={() => {
                setFieldValue("category", label);
              }}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-3 p-2">
                <div className="w-[30px] h-[30px]">
                  <Image src={image} alt={label} width={30} height={30}/>
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
          <Icon name="coin" size={1.5} color="dark" />
          <h3 className="text-2xl font-medium text-black mb-0">Giá sản phẩm</h3>
        </div>

        <Divider color="dark-300" marginTop="10px" />

        <div className="flex items-center mt-6">
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
          bgColor="emerald"
          bgHoverColor="yellow"
          full
          className="mt-5 hover:text-dark"
        >
          Áp dụng
        </CustomButton>
      </div>

      <div className="p-4 border rounded-md shadow-md bg-white py-6">
        <div className="flex items-center gap-2">
          <Icon name="vendor" size={1.5} />
          <h3 className="text-2xl font-medium text-black mb-0">Thương hiệu</h3>
        </div>

        <Divider color="dark-300" marginTop="10px" />

        <Accordion minHeight="180px" buttonClassName="text-emerald">
          <div className="mt-3 ml-2">
            {brandList.map(({ name, code }) => (
              <FormikCheckBox key={code} label={name} name={code}/>
            ))}
          </div>
        </Accordion>
      </div>

      <div className="p-4 border rounded-md shadow-md bg-white py-6">
        <div className="flex items-center gap-2">
          <Icon name="rating" size={1.5} color="dark" />
          <h3 className="text-2xl font-medium text-black mb-0">Đánh giá</h3>
        </div>

        <Divider color="dark-300" marginTop="10px" />

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
                      color={values.rating === rating ? "yellow" : "emerald"}
                    />
                  ))}
                  {[...Array(5 - rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="starEmpty"
                      size={1.5}
                      color={values.rating === rating ? "yellow" : "emerald"}
                    />
                  ))}
                </div>
                <span className="text-lg text-dark font-medium ml-2">
                  {rating === 5 ? "" : "Trở lên"}
                </span>
              </label>
            ))}
        </div>

        <Divider color="dark-300" marginTop="20px" marginBottom="20px" />

        <CustomButton
          bgColor="emerald"
          bgHoverColor="yellow"
          full
          className="hover:text-dark"
        >
          Tìm kiếm
        </CustomButton>
      </div>
    </div>
  );
};

export default ProductFilterSideBar;
