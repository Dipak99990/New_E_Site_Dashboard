import Link from "next/link";
import React from "react";

function DashboardPage() {
  return (
    <>
      <div className=" ">
        <h1 className=" text-lg ">Welcome to Dashboard</h1>
        <Link href="/products">
          {" "}
          <h1 className="text-lg text-green-500">
            Start by viewing Products View Products
          </h1>
        </Link>
      </div>
    </>
  );
}

export default DashboardPage;
