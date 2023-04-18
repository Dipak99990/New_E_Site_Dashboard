import { StoreContext } from "@/providers/StoreContext";
import Link from "next/link";
import React, { useContext, useState } from "react";

function Sidebar() {
  const { ShowSidebar } = useContext(StoreContext);
  return (
    <>
      {ShowSidebar && (
        <div className="fixed top-0 left-0 z-40 w-40  h-screen transition-transform  translate-x-0 flex-none bg-green-800 text-green-100 ">
          <ul className="py-4">
            <div className="flex justify-between">
              <li className="px-6 py-3 text-lg font-bold">
                <Link href="/dashboard" passHref>
                  {" "}
                  Dashboard
                </Link>
              </li>
            </div>
            <Link href="products">
              <li className="px-6 py-3 hover:bg-white hover:text-green-900 active:bg-white">
                Products
              </li>
            </Link>
            <Link href="orders">
              <li className="px-6 py-3 hover:bg-white hover:text-green-900 active:bg-white">
                Orders
              </li>
            </Link>{" "}
            <Link href="users">
              <li className="px-6 py-3 hover:bg-white hover:text-green-900 active:bg-white">
                Users
              </li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}

export default Sidebar;
