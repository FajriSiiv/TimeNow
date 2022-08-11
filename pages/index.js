import Head from "next/head";
import About from "./About/About";
import Hero from "./Hero/Hero";
import ViewDemo from "./ViewDemo/ViewDemo";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TimeNow</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <ViewDemo />
    </div>
  );
}
