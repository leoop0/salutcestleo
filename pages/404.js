import Header from "../components/Header/Header";

import Head from "next/head";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>404 - salutcestleo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="wrapper">
        <div className="content">
          <img src="/img/Alt.svg" alt="Logo with crux on eyes" />
          <h1 className="Syne">#404</h1>
          <h2>Oof, the page you're looking for is'nt here anymore :(</h2>
        </div>
      </div>
    </div>
  );
}
