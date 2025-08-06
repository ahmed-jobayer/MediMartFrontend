"use client"

import { getAllOrders } from '@/services/orders';
import { getAllProducts } from '@/services/Product';
import { TMedicine } from '@/types';
import { IOrderDB } from '@/types/order';
import { ChartBarIcon, ClipboardListIcon, DollarSignIcon, ShoppingBagIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const CustomerPage = () => {
    const [orders, setOrdders] = useState<IOrderDB[]>([]);
     const [pendingOrders, setPendingOrdders] = useState<IOrderDB[]>([]);
     const [allMedicines, setAllMedicines] = useState([]);
     const [inStockMedicines, setInStockMedicines] = useState([]);
   
     useEffect(() => {
       const fetchMedicines = async () => {
         const res = await getAllProducts("1", "100", {}); // Fetch all products
         setAllMedicines(res?.data?.result || []);
         setInStockMedicines(res?.data?.result.filter((data: TMedicine)=> !data.inStock ))
       };
   
       fetchMedicines();
     }, []);

     useEffect(() => {
       const fetchData = async () => {
         try {
           const data = await getAllOrders();
           const orders = data?.data?.data || [];
           // Filter orders for the specific user
           setOrdders(orders);
           setPendingOrdders(orders.filter((order : IOrderDB)=> order.shippingStatus === "PENDING") )
           // orders.filter((order: IOrderDB) => order?.user?._id === user._id)
         } catch (error) {
           console.error("Failed to fetch Users:", error);
         } finally {
           // setIsLoading(false);
         }
       };
       fetchData();
     }, []);
   
     return (
       <div className="min-h-screen bg-gray-100 p-8">
         <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
   
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
           <StatCard
             title="Total Orders"
             value={orders?.length}
             icon={<ClipboardListIcon className="w-8 h-8 text-white" />}
             color="from-indigo-500 to-purple-500"
           />
           <StatCard
             title="Pending Approvals"
             value={pendingOrders?.length}
             icon={<ChartBarIcon className="w-8 h-8 text-white" />}
             color="from-yellow-500 to-orange-500"
           />
           <StatCard
   
           
             title="Out of Stock"
             value={inStockMedicines?.length}
             icon={<ShoppingBagIcon className="w-8 h-8 text-white" />}
             color="from-red-500 to-pink-500"
           />
           <StatCard
             title="Total Products"
             value={allMedicines?.length}
             icon={<DollarSignIcon className="w-8 h-8 text-white" />}
             color="from-blue-500 to-cyan-500"
           />
         </div>
       </div>
     );
   };
   
   const StatCard = ({
     title,
     value, 
     icon,
     color,
   }: {
     title: string;
     value: number;
     icon: React.ReactNode;
     color: string;
   }) => (
     <div
       className={`bg-gradient-to-r ${color} text-white rounded-xl shadow-lg p-6 flex items-center justify-between`}
     >
       <div>
         <p className="text-sm">{title}</p>
         <h2 className="text-3xl font-bold">{value}</h2>
       </div>
       <div className="bg-white bg-opacity-20 p-3 rounded-full">{icon}</div>
     </div>
   );
   


export default CustomerPage; 