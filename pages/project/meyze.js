import Link from "next/link";
import Header from "../../components/Header/Header";
import Cta from "../../components/CTA/Cta";

import Head from "next/head";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Meyze - salutcestleo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="project-page wrapper">
        <div className="container">
          <div className="title">
            <div className="text">
              <img src="/icons/arro.svg" alt="" />
              <h1 className="syne">Meyze</h1>
            </div>
            <img src="/thumbnails/meyze.png" className="thumbnail" alt="" />
          </div>
          <div className="content">
            <div className="desc">
              <p>The brief: design an application that teaches physics.</p>
              <p>
                It had to be able to teach both neophytes and people who already had some knowledge
                of the subject, while remaining fun.
              </p>
              <span>
                This project was conducted during my 3rd year of study, in a UI Design course .
              </span>
            </div>
            <div className="details">
              <div className="item">
                <h6>ROLE</h6>
                <p>UI/UX Designer</p>
              </div>
              <div className="item">
                <h6>CLIENT</h6>
                <p>School Project</p>
              </div>
              <div className="item">
                <h6>STACK</h6>
                <p>Figma, Spline</p>
              </div>
            </div>
          </div>
          <div className="gallery">
            <img src="/projects/meyze/1.jpg" alt="Meyze's Screens" />
            <img src="/projects/meyze/2.jpg" alt="Meyze's Screens" />
          </div>
          <a className="btn secondary" href="https://newgo.io" target="_blank" rel="noreferrer">
            Click here to see the PDF
          </a>
        </div>
      </div>
      <Cta />
    </div>
  );
}
