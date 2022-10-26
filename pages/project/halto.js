import Link from "next/link";
import Header from "../../components/Header/Header";
import Cta from "../../components/CTA/Cta";

import Head from "next/head";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Halto - salutcestleo</title>
        <meta
          name="viewport"
          content="Halto : 1v1 shooter entirely playable in a browser in 2
                weeks."
        />
      </Head>
      <Header />
      <div className="project-page wrapper">
        <div className="container">
          <div className="title">
            <div className="text">
              <img src="/icons/arro.svg" alt="" />
              <h1 className="syne">Halto</h1>
            </div>
            <img src="/thumbnails/halto.png" className="thumbnail" alt="" />
          </div>
          <div className="content">
            <div className="desc">
              <p>
                The starting postulate: Create a 1v1 shooter entirely playable in a browser in 2
                weeks.
              </p>
              <p>
                We were 15 people to realize this project, UI/UX Designer, Developers, Graphic
                designers, etc. and each one was able to bring his stone to the building.
              </p>
              <span>
                Project realized within the context of the Digital Event of the ESD Bordeaux.
              </span>
            </div>
            <div className="details">
              <div className="item">
                <h6>ROLE</h6>
                <p>Web developer</p>
              </div>
              <div className="item">
                <h6>CLIENT</h6>
                <a
                  href="https://ecole-du-digital.com/campus/bordeaux/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ESD Bordeaux
                </a>
              </div>
              <div className="item">
                <h6>STACK</h6>
                <p>React, Firebase, Figma</p>
              </div>
            </div>
          </div>
          <div className="gallery">
            <img src="/projects/halto/1.png" alt="Halto's homescreen" />
            <img src="/projects/halto/2.png" alt="Halto's matchmaking" />
          </div>
          <a
            className="btn secondary"
            href="https://haltogame.com/"
            target="_blank"
            rel="noreferrer"
          >
            Click here to try the game
          </a>
        </div>
      </div>
      <Cta />
    </div>
  );
}
