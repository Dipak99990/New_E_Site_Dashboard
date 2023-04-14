import Head from "next/head";
import React from "react";
import { ToastContainer } from "react-toastify";

function Layout({ title, children }) {
  return (
    <>
      <ToastContainer position="bottom-center" limit={1} />
      <Head>
        <title>{title ? title + "" : "Dashboard"}</title>
        <meta name="description" content="E commerce website" />
      </Head>
      {children}
    </>
  );
}

export default Layout;
