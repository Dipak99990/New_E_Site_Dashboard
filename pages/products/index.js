import Layout from "@/components/layout";
import ProductsPage from "@/components/pages/products";
import Sidebar from "@/components/sidebar";
import Product from "@/models/Product";
import db from "@/utils/db";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

export default function ProductsScreen({ products }) {
  const [ShowSidebar, setShowSidebar] = useState(true);
  const { data: session } = useSession();
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

              <div>{session?.user.name}</div>
            </div>
          </nav>{" "}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductsPage product={product} key={product._id}></ProductsPage>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
ProductsScreen.auth = true;
export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertdoctoobj),
    },
  };
}
