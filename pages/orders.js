import Layout from "@/components/layout";
import OrderPage from "@/components/pages/orders";
import Sidebar from "@/components/sidebar";
import Order from "@/models/Order";
import db from "@/utils/db";
import { useSession } from "next-auth/react";
import DropdownLink from "@/components/DropdownLinks";
import React, { useState } from "react";
import { Menu } from "@headlessui/react";
export default function OrdersDashboard({ orders }) {

  console.log(orders[0])
  const { data: session } = useSession();
  const handlelogout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <>
      <Layout title="Dashboard" />
      <div className="flex h-screen">
       
        <div className="flex-1">
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          OrderId
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Email
                        </th>
                       
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Order Items
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Paid Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 max-w-[6rem] py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          Mark as completed
                        </th>
                    
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {orders.length > 0 &&
                        orders.map((order) => (
                          <OrderPage key={order._id} {...order} />
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

OrdersDashboard.auth = true;
export async function getServerSideProps() {
  await db.connect();
  const data = await Order.find().lean();
  const orders = data.map(db.convertdoctoobj).filter((order) => order);
  await db.disconnect();
  return {
    props: {
      orders: orders,
    },
  };
}
