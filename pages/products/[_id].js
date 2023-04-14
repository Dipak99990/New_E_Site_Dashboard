import Layout from "@/components/layout";
import Product from "@/models/Product";
import db from "@/utils/db";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function ProductItem({ product }) {
  return (
    <>
      <Layout title={product.name} />
      <div className="grid md:grid-cols-4 md:gap-2 my-6 mx-5">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={800}
            height={640}
          />
        </div>
        <div>
          <ul className="primary-button text-white p-6">
            <li>
              <h1 className="text-xl font-semibold">Name:{product.name}</h1>
            </li>
            <li>
              <p className="text-xl font-thinlight">
                Category:{product.category}
              </p>
            </li>
            <li>
              <p className="text-xl font-thinlight">Rating:{product.rating}</p>
            </li>
            <li>
              <p className="text-xl font-thinlight">
                Description:{product.description}
              </p>
            </li>
          </ul>
          <div className="my-3 p-4">
            <Link href="/products">Go Back</Link>
          </div>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  const { params } = context;
  const { _id } = params;
  await db.connect();
  const product = await Product.findOne({ _id }).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertdoctoobj(product) : null,
    },
  };
}
