"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllOrders } from "@/services/orders";
import { IOrderDB, ShippingStatus } from "@/types/order";
import React, { useEffect, useState } from "react";

const ViewOrders = () => {
  const [orders, setOrders] = useState<IOrderDB[]>();
  const [page, setPage] = useState(1);
  const limit = 7; //? Set limit to x items per page
  const [selectedStatus, setSelectedStatus] =
    useState<ShippingStatus>("PENDING");
  const [selectedOrderId, setSelectedOrderId] = useState<
    ShippingStatus | string
  >("");
  const [openStatusDialog, setOpenStatusDialog] = useState(false);

  //* Available order status options
  const orderStatusOptions = [
    { label: "PENDING", value: "PENDING" },
    { label: "PROCESSING", value: "PROCESSING" },
    { label: "SHIPPED", value: "SHIPPED" },
    { label: "DELIVERED", value: "DELIVERED" },
    { label: "CANCELED", value: "CANCELED" },
  ];

  //* Fetch orders on component mount and when page changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllOrders();
        const orders = data?.data?.data || [];
        setOrders(orders);
      } catch (error) {
        console.error("Failed to fetch Order");
      }
    };
    fetchData();
  }, []);

  if (!orders) return <Loading />;
  if (orders?.length < 1) {
    return (
      <div>
        <h2 className="text-center font-bold text-3xl mb-14">
          Till now There is no order to show!!
        </h2>
      </div>
    );
  }

  //* Calculate pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedOrders = orders.slice(startIndex, endIndex);

  return (
    <div className="lg:w-full p-8 border rounded-xl shadow-lg bg-white">
      <h2 className="flex justify-center items-center gap-2 font-bold text-3xl mb-10 text-blue-500 tracking-tight">
        Manage All Orders
      </h2>

      <Table className="border rounded-lg overflow-hidden">
        <TableCaption className="mt-6 text-slate-600 font-medium">
          All customers orders
        </TableCaption>
        <TableHeader className="bg-blue-500">
          <TableRow>
            <TableHead className="font-semibold text-white py-4">
              Customer Name
            </TableHead>
            <TableHead className="font-semibold text-white">Payment</TableHead>
            <TableHead className="font-semibold text-white">
              Shipping Status
            </TableHead>
            <TableHead className="font-semibold text-white">Amount</TableHead>
            <TableHead className="text-right font-semibold text-white">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedOrders?.map((order) => (
            <TableRow key={order._id}>
              <TableCell className="font-medium text-gray-900">
                {order.user.name}
              </TableCell>
              <TableCell>
                <span>{order?.paymentStatus}</span>
              </TableCell>
              <TableCell>{order?.shippingStatus}</TableCell>
              <TableCell className="font-medium">
                ${order?.totalPrice.toFixed(2)}
              </TableCell>
              <TableCell className="text-right"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center mt-8 gap-4 items-center">
        <Button
          variant="outline"
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
        >
          ⬅️ Previous
        </Button>

        <span className="flex items-center font-medium text-lg text-gray-700">
          Page {page}
        </span>

        <Button
          variant="outline"
          disabled={endIndex >= (orders?.length || 0)}
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
        >
          Next ➡️
        </Button>
      </div>
    </div>
  );
};

export default ViewOrders;
