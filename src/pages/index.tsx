import AboutUs from "@/components/Homepage/AboutUs";
import Contact from "@/components/Homepage/Contact";
import MainHeader from "@/components/Homepage/MainHeader";
import Team from "@/components/Homepage/Team";
import Testimonial from "@/components/Homepage/Testimonial";
import Head from "next/head";
// import "./globals.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Baby bugs | Homepage</title>
        <meta name="description" content="Homepage for baby bugs web application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <AboutUs />
      <Team />
      <Testimonial />
      <Contact />
    </>
  );
}
