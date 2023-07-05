import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "./globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Component {...pageProps} />
      {/* {router.pathname == "/" ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )} */}
    </>
  );
}
