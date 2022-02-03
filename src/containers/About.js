import JavaScriptLogo from "../assets/images/javascript-logo.png";
import TypeScriptLogo from "../assets/images/typescript-logo.png";
import ReactLogo from "../assets/images/react-logo.png";
import HtmlLogo from "../assets/images/html5-logo.png";
import CssLogo from "../assets/images/css3-logo.png";
import ReduxLogo from "../assets/images/redux-logo.png";
import NodeLogo from "../assets/images/nodejs-logo.png";
import ManonCV from "../assets/cv_manon-boiteau.pdf";

const About = () => {
  return (
    <section className="about">
      <div className="wrapper">
        <div className="about__photo">
          <div>
            <img />
          </div>
          <div className="about__photo-techno">
            <img src={HtmlLogo} alt="HTML5 logo" />
            <img src={CssLogo} alt="CSS3 logo" />
            <img src={ReactLogo} alt="ReactJS logo" />
            <img src={ReduxLogo} alt="Redux logo" />
            <img src={NodeLogo} alt="NodeJS logo" />
            <img src={JavaScriptLogo} alt="JavaScript logo" />
            <img src={TypeScriptLogo} alt="TypeScript logo" />
          </div>
        </div>

        <div>
          <div className="about__name">
            <h2>Manon Boiteau</h2>
            <p>Frontend Web & Mobile Developer</p>
          </div>
          <div className="about__infos">
            <div>
              <p>
                From catering to events through communication, I am now a{" "}
                <span>Web and Mobile Frontend Developer 👩🏻‍💻</span>
              </p>
              <p>
                Fan of my Persian Olaf, unconditional fan of gourmet tables and
                ambassador of the Fourme de Montbrison, I{" "}
                <span>love learning</span> and <span>creating new things</span>.
              </p>
              <p>
                <span>Self-made developer</span>, I am so{" "}
                <span>addicted to pixels</span> that I can{" "}
                <span>be trusted to be rigorous!</span>
              </p>
            </div>

            <div>
              <h3>Learn more about me, if I were:</h3>
              <div>
                <p>
                  An object - <span>a headset</span>
                </p>
                <p>
                  An ingredient - <span>pepper</span>{" "}
                </p>
                <p>
                  A restaurant - <span>Pierre Sang on Gambey (📍Paris)</span>
                </p>
                <p>
                  A sound - <span>I'm Coming Home - Dino Lenny</span>
                </p>
                <p>
                  A dish - <span>Swiss fondue 🫕</span>
                </p>
                <p>
                  A pastrie - <span>a chocolate cookie</span>
                </p>
                <p>
                  A TV show - <span>Mad Men</span>
                </p>
                <p>
                  A movie - <span>Parasite</span>
                </p>
                <p>
                  An animal - <span>a siberian cat</span>
                </p>
                <p>
                  An actress - <span>Virginie Efira</span>
                </p>
                <p>
                  A destination - <span>Greek Islands</span>
                </p>
              </div>
            </div>
            <div>
              <p>
                Find more details{" "}
                <a
                  href="https://www.linkedin.com/in/manon-boiteau/"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
              </p>
              <p>
                Download my{" "}
                <a href={ManonCV} download>
                  CV
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
