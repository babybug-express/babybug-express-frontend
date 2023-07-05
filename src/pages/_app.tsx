import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "./globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
