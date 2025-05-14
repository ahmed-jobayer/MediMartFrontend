"use client"
import CustomButton from "@/components/shared/CustomButton";
import { CheckCircle, Home, Logs } from "lucide-react";
import Link from "next/link";
import React from "react";

const SuccessfullOrder = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center max-w-md w-full">
        <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Payment Successful
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase! Your order has been successfully placed.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/">
            <CustomButton
              textName={
                <div className="flex gap-1 justify-content-center items-center ">
                  <Home />
                  Home
                </div>
              }
            />
          </Link>
          <Link href="/customer/view-orders">
            <CustomButton
              className="!text-blue-500 bg-white border"
              textName={
                <div className="flex gap-1 justify-content-center items-center ">
                  <Logs />
                  My Orders
                </div>
              }
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessfullOrder;
