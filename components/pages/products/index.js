import Link from "next/link";
import React from "react";
import Image from "next/image";
function ProductsPage({ product }) {
  return (
    <>
      <div className="card hover:scale-105 ease-in-out duration-100">
        <Link href={`/products/${product._id}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded shadow object-cover h-80 w-full"
          />
        </Link>
        <div className="flex flex-col items-center justify-center p-5">
          <Link legacyBehavior href={`/products/${product._id}`}>
            <a>
              <h2 className="text-lg">{product.name}</h2>
            </a>
          </Link>
          <p className="mb-2">{product.brand}</p>
          <p>${product.price}</p>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
