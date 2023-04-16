import Layout from "@/components/layout";
import OrderPage from "@/components/pages/orders";
import Sidebar from "@/components/sidebar";
import Order from "@/models/Order";
import db from "@/utils/db";
import { useSession } from "next-auth/react";
import DropdownLink from "@/components/DropdownLinks";
import React, { useState } from "react";
import { Menu } from "@headlessui/react";
export default function OrdersDashboard(orders) {
  const [ShowSidebar, setShowSidebar] = useState(true);
  const { data: session } = useSession();
  const handlelogout = () => {
    signOut({ callbackUrl: "/" });
  };
  return (
    <>
      <Layout title="Dashboard" />
      <div className="flex h-screen">
        <div className="flex justify-between">
          <Sidebar ShowSidebar={ShowSidebar} />{" "}
        </div>
        <div className="flex-1">
          <nav className="bg-green-700 text-green-100 px-4 py-3">
            <div className="flex justify-between">
              <div className="flex gap-8">
                <div>
                  <button
                    onClick={() => setShowSidebar(!ShowSidebar)}
                    className="fixed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                </div>
                <div>New Sharma Furniture Udhyoug</div>
              </div>

              <Menu as="div">
                <Menu.Button>{session.user.name}</Menu.Button>
                <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg">
                  <Menu.Item as="div">
                    <DropdownLink
                      className="dropdown-link text-black"
                      href="/"
                      onClick={handlelogout}
                    >
                      Log Out
                    </DropdownLink>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </nav>{" "}
          <OrderPage orders={orders} />
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
