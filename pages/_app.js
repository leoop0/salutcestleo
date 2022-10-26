import "../styles/globals.scss";
import "../components/Header/Header.scss";
import "../components/Banner/Banner.scss";
import "../components/Work/Work.scss";
import "../components/Cta/Cta.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
