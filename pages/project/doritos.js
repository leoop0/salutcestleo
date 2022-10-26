import Link from "next/link";
import Header from "../../components/Header/Header";
import Cta from "../../components/Cta/Cta";

import Head from "next/head";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Doritos - salutcestleo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="project-page wrapper">
        <div className="container">
          <div className="title">
            <div className="text">
              <img src="/icons/arro.svg" alt="" />
              <h1 className="syne">Doritos</h1>
            </div>
            <img src="/thumbnails/doritos.png" className="thumbnail" alt="" />
          </div>
          <div className="content">
            <div className="desc">
              <p>Doritos wanted to promote its upcoming tortillas: Doritos Pizza Peperoni.</p>
              <p>
                In teams of 10, we had 1 week to imagine a complete communication strategy, a
                graphic charter and all the elements that go with it.
              </p>
              <span>
                I was in charge of the realization of a lot of graphic assets like the game screens
                for example.
              </span>
            </div>
            <div className="details">
              <div className="item">
                <h6>ROLE</h6>
                <p>Graphic Designer</p>
              </div>
              <div className="item">
                <h6>CLIENT</h6>
                <a href="https://www.pepsico.com/" target="_blank" rel="noreferrer">
                  Pepsico
                </a>
              </div>
              <div className="item">
                <h6>STACK</h6>
                <p>Photoshop, Illustrator, Figma</p>
              </div>
            </div>
          </div>
          <div className="gallery">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/uFfWZKRxcUg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XzrFKY8AIco"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Cta />
    </div>
  );
}
