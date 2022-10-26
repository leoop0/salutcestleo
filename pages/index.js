import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Work from "../components/Work/Work";
import Cta from "../components/CTA/Cta";

import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>salutcestleo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Banner />
      <Work />
      <Cta />
    </div>
  );
}
