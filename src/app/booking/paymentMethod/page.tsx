/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { getRoom } from "@/api/roomService";
import { useAppSelector } from "@/redux";
import { useQuery } from "@tanstack/react-query";
import { Tooltip } from "antd";
import { CircleAlert } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
const PaymentMethodPage = () => {
  const param = useSearchParams();
  const [paymentMethod, setPaymentMethod] = useState("");
  const { user } = useAppSelector((state) => state.auth)

  const handlePaymentChange = (method: any) => {
    setPaymentMethod(method);
  };

  const { data } = useQuery({
    queryKey: ["room", param.get("id")],
    queryFn: () => getRoom(param.get("id") as string),
    staleTime: 60000,
  });

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-7xl container mx-auto bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 gap-6">
        <div className="space-y-6 ">
          <div>
            <p className="text-4xl font-bold">₫316,879</p>
            <div className="flex justify-between border-b py-2 items-center">
              <div className="flex items-center justify-center space-x-2">
                <Image
                  src={data?.images[0] ?? `/images/email-bg.jpg`}
                  alt="Product"
                  className="h-[60px] w-[60px] object-contain"
                  width={60}
                  height={60}
                />
                <div className="flex flex-col">   
                  <span>{data?.roomName ?? "Name"}</span>
                  <span className="text-gray-500 text-sm">{data?.description ?? "Decriptions"}</span>
                </div>
              </div>
              <span>₫{new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(data?.price || 0)}</span>
            </div>
            <div className="flex justify-between border-b py-2">
              <span>Subtotal</span>
              <span>₫{new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(data?.price || 0)}</span>
            </div>

            <div className="flex justify-between border-b py-2 items-center">
              <span className="flex place-items-center" >
                <span>Tax</span>
                <span className="text-sm text-gray-500 ml-1 ">
                  <Tooltip title="Tax is determined by billing information"  >
                    <CircleAlert className="w-[13px] h-[13px]" />
                  </Tooltip>
                </span>
              </span>
              <span>₫0</span>
            </div>
            <div className="flex justify-between border-t py-2">
              <span className="font-bold">Total due</span>
              <span className="font-bold">₫{new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(data?.price || 0)}</span>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-lg font-semibold">Payment Methods</h2>
          <div className="space-y-4">
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="paymentMethod"
                value="system"
                className="h-4 w-4 text-blue-500 focus:ring-blue-400 cursor-pointer"
                onChange={() => handlePaymentChange("system")}
              />
              <span className="text-sm">Pay with system balance</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="paymentMethod"
                value="direct"
                className="h-4 w-4 text-blue-500 focus:ring-blue-400 cursor-pointer"
                onChange={() => handlePaymentChange("direct")}
              />
              <span className="text-sm">Pay directly</span>
            </label>
          </div>

          {paymentMethod === "system" && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm">Your system balance:</p>
              <p className="text-lg font-bold text-green-600">₫{new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(user?.balance || 0)}</p>
            </div>
          )}

          <button className="w-full bg-blue-500 text-white font-semibold rounded-md p-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Pay
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodPage;
