import Link from "next/link";
import React, { useState } from "react";

function Sidebar({ ShowSidebar }) {
  return (
    <>
      {ShowSidebar && (
        <div className="flex-none bg-green-800 text-green-100  md:w-64 md:h-screen">
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
              <li className="px-6 py-3 hover:bg-white hover:text-green-900">
                Products
              </li>
            </Link>
            <Link href="orders">
              <li className="px-6 py-3 hover:bg-white hover:text-green-900">
                Orders
              </li>
            </Link>{" "}
            <Link href="users">
              <li className="px-6 py-3 hover:bg-white hover:text-green-900">
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
