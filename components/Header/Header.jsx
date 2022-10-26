import Link from "next/link";

export default function Header() {
  return (
    <nav className="wrapper">
      <div className="container desktop">
        <div className="left">
          <Link href="/">
            <a className="logo">
              <img src="/img/Logo.svg" alt="Logo" />
              <span className="mgc_search_line"></span>
              <span className="syne">salutcestleo</span>
            </a>
          </Link>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <a href="https://dribbble.com/Oeleo" target="_blank" rel="noreferrer">
                <img src="/icons/dribbble.svg" alt="Dribbble" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/leofrati/" target="_blank" rel="noreferrer">
                <img src="/icons/linkedin.svg" alt="Linkedin" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/salutcest.leo/" target="_blank" rel="noreferrer">
                <img src="/icons/insta.svg" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="mailto:hello@salutcestleo.com" target="_blank" rel="noreferrer">
                <img src="/icons/email.svg" alt="Email" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mobile">
        <div className="left">
          <Link href="/">
            <a className="logo">
              <img src="/img/Logo.svg" alt="Logo" />
              <span className="mgc_search_line"></span>
              <span className="syne">salutcestleo</span>
            </a>
          </Link>
        </div>
        <img src="/icons/menu.svg" alt="menu" />
      </div>
    </nav>
  );
}
