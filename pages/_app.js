import MainLayout from "@/Layouts/MainAppLayout";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import StoreContextProviders from "@/providers/StoreContext";
import "@/styles/globals.css";

import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";
function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}
function Auth({ children }) {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/unauthorized?message=login required");
    },
  });
  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <StoreContextProviders>
        <div>{children}</div>
      </StoreContextProviders>
    </div>
  );
}
export default App;
