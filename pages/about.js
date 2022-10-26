import Header from "../components/Header/Header";
import Cta from "../components/Cta/Cta";

import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>About - salutcestleo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div>
        <div className="about wrapper">
          <div className="container">
            <h1 className="syne">
              About Me <img src="/img/gradient-4.png" alt="" />
            </h1>
            <div className="bio">
              <div className="left">
                <p>
                  Hello 👋, I'm a french student in 🎨 Graphic Design, specialized in UX/UI Design.
                  <br />
                  <br />
                  I'm currently in my 1st year of Master Digital Design at the Ecole Supérieure du
                  Digital of Bordeaux. In parallel, I'm working at Newgo, a SaaS in the e-sport &
                  gaming ecosystem.
                  <br />
                  <br />
                  I'm ⛰ mountains lover.
                </p>
              </div>
              <div className="right">
                <img src="/img/me.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="exp wrapper">
          <div className="container">
            <h2 className="syne">Work Experience</h2>
            <div className="experiences">
              <div className="experience">
                <img src="/img/Logo.svg" alt="Logo" />
                <h4>
                  UI Designer / Web dev · <span>Freelance</span>
                </h4>
                <p>
                  Realization of various websites, most often via Wordpress to facilitate the
                  update. Creation of all kinds, posters, logos etc, but I prefer to focus on UI/UX
                  Design.
                </p>
              </div>
              <div className="experience">
                <img src="/img/exp/newgo.png" alt="Newgo Logo" />
                <h4>
                  Product Designer ·
                  <a href="https://newgo.io/" target="_blank" rel="noreferrer">
                    Newgo
                  </a>
                </h4>
                <p>
                  At Newgo, I am in charge of all the application design, UX & UI. I'm also a
                  developer for the website. User testing, acceptance, accessibility etc. are part
                  of my missions.
                </p>
              </div>
              <div className="experience">
                <img src="/img/exp/oplus.png" alt="Oplus Logo" />
                <h4>
                  Web developer ·
                  <a href="https://oplus-urbanistes.fr/" target="_blank" rel="noreferrer">
                    0+ Urbanistes
                  </a>
                </h4>
                <p>
                  My 2nd year internship. I had the opportunity to realize it in a cabinet of town
                  planning, for which I had the opportunity to realize various sites for customers
                  as Domofrance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cta />
    </div>
  );
}
