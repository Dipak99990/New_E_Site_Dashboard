import Layout from "@/components/layout";
import ProductsPage from "@/components/pages/products";
import Sidebar from "@/components/sidebar";
import Product from "@/models/Product";
import db from "@/utils/db";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

export default function ProductsScreen({ products }) {
  const { data: session } = useSession();
  return (
    <>
      <Layout title="Dashboard" />
      <div className="flex h-screen">
      
        <div className="flex-1">
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
