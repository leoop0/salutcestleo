export default function Cta() {
  return (
    <div>
      <div className="cta wrapper" id="contact">
        <div className="container">
          <h2 className="syne">
            An idea or <br />
            <span className="syne">
              a project ?<img src="/img/gradient-2.png" alt="" />
            </span>
          </h2>
          <div className="medias">
            <ul>
              <li>
                <a href="https://dribbble.com/Oeleo" target="_blank" rel="noreferrer">
                  <img src="/icons/dribbble.svg" alt="Dribbble" />
                  dribbble.com.Oeleo
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/leofrati/" target="_blank" rel="noreferrer">
                  <img src="/icons/linkedin.svg" alt="Linkedin" />
                  linkedin.com.in/leofrati
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/salutcest.leo/" target="_blank" rel="noreferrer">
                  <img src="/icons/insta.svg" alt="Instagram" />
                  @salutcest.leo
                </a>
              </li>
              <li>
                <a href="mailto:hello@salutcestleo.com" target="_blank" rel="noreferrer">
                  <img src="/icons/email.svg" alt="Email" />
                  hello@salutcestleo.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="wrapper">
        <div className="container">
          <p>
            <span className="syne">salutcestleo</span> · All rights reserved
          </p>
          <img src="/img/Logo.svg" alt="Logo" />
        </div>
      </footer>
    </div>
  );
}
