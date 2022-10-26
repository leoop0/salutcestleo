import Link from "next/link";
import Header from "../../components/Header/Header";
import Cta from "../../components/CTA/Cta";

import Head from "next/head";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Newgo - salutcestleo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="project-page wrapper">
        <div className="container">
          <div className="title">
            <div className="text">
              <img src="/icons/arro.svg" alt="" />
              <h1 className="syne">Newgo</h1>
            </div>
            <img src="/thumbnails/newgo.png" className="thumbnail" alt="" />
          </div>
          <div className="content">
            <div className="desc">
              <p>
                Newgo is a SaaS that structures the e-sport & gaming ecosystem in an innovative way.
              </p>
              <p>
                This company offers many services via its application: Sponsoring, InGame
                Advertising, Video or live content etc.
              </p>
              <span>
                I have had the opportunity to contribute to this great project for about 1 year.
              </span>
            </div>
            <div className="details">
              <div className="item">
                <h6>ROLE</h6>
                <p>Product Designer</p>
              </div>
              <div className="item">
                <h6>CLIENT</h6>
                <a href="https://newgo.io" target="_blank" rel="noreferrer">
                  Newgo
                </a>
              </div>
              <div className="item">
                <h6>STACK</h6>
                <p>Figma, React, Typescript</p>
              </div>
            </div>
          </div>
          <div className="gallery">
            <img src="/projects/newgo/1.png" alt="Newgo's Dashboard" />
            <img src="/projects/newgo/2.png" alt="Newgo's Emailing" />
          </div>
          <a className="btn secondary" href="https://newgo.io" target="_blank" rel="noreferrer">
            Click here to see the website
          </a>
        </div>
      </div>
      <Cta />
    </div>
  );
}
