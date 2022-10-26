import Link from "next/link";

export default function Header() {
  return (
    <div className="banner wrapper">
      <div className="container">
        <div className="left">
          <img src="/img/Logo.svg" alt="Logo" />
          <h1 className="syne">
            Leo Frati <br />
            <span className="syne">
              Product Designer
              <img src="/img/gradient-1.png" alt="" />
            </span>
          </h1>
          <p>
            I’m a french design student in 🎨 Graphic Design, <br />
            specialized in UX/UI Design.
          </p>
          <div className="btns">
            <Link href="/projects">
              <a className="btn">
                My projects<i data-feather="circle"></i>
              </a>
            </Link>
            <a
              href="mailto:hello@salutcestleo.com"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              Get in touch<i data-feather="circle"></i>
            </a>
          </div>
        </div>
        <img className="right" src="/img/ghost.png" alt="" />
      </div>
    </div>
  );
}
