import Link from "next/link";
import Header from "../components/Header/Header";
import Cta from "../components/CTA/Cta";

import Head from "next/head";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects - salutcestleo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="projects-page">
        <div className="projects wrapper">
          <div className="container">
            <h1 className="syne">
              My Projects <img src="/img/gradient-3.png" alt="Gradient" />
            </h1>
            <div className="projects-container">
              <Link href="/project/halto">
                <a className="project">
                  <img src="/thumbnails/halto.png" alt="" />
                  <div className="dom">
                    <p>UI Design - Web Dev</p>
                    <p>Client Project</p>
                  </div>
                  <div className="name">
                    <p className="syne">Halto</p>
                    <p>2022</p>
                  </div>
                </a>
              </Link>
              <Link href="/project/newgo">
                <a className="project">
                  <img src="/thumbnails/newgo.png" alt="" />
                  <div className="dom">
                    <p>Product Design</p>
                    <p>Internship</p>
                  </div>
                  <div className="name">
                    <p className="syne">Newgo</p>
                    <p>2021-?</p>
                  </div>
                </a>
              </Link>
              <Link href="/project/doritos">
                <a className="project">
                  <img src="/thumbnails/doritos.png" alt="" />
                  <div className="dom">
                    <p>Artistic Direction</p>
                    <p>Client Project</p>
                  </div>
                  <div className="name">
                    <p className="syne">Doritos</p>
                    <p>2022</p>
                  </div>
                </a>
              </Link>
              <Link href="/project/meyze">
                <a className="project">
                  <img src="/thumbnails/meyze.png" alt="" />
                  <div className="dom">
                    <p>UI/UX Design</p>
                    <p>School Project</p>
                  </div>
                  <div className="name">
                    <p className="syne">Meyze</p>
                    <p>2022</p>
                  </div>
                </a>
              </Link>
              {/* <Link href="/project/forecast">
                <a className="project">
                  <img src="/thumbnails/forecast.png" alt="" />
                  <div className="dom">
                    <p>UI/UX Design</p>
                    <p>School Project</p>
                  </div>
                  <div className="name">
                    <p className="syne">Forecast</p>
                    <p>2021</p>
                  </div>
                </a>
              </Link>
              <Link href="/project/horror">
                <a className="project">
                  <img src="/thumbnails/horror.png" alt="" />
                  <div className="dom">
                    <p>UI Design</p>
                    <p>School Project</p>
                  </div>
                  <div className="name">
                    <p className="syne">Horror Vacui</p>
                    <p>2021</p>
                  </div>
                </a>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <Cta />
    </div>
  );
}
