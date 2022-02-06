import ManonCV from "../assets/cv_manon-boiteau.pdf";

const About = () => {
  return (
    <section className="about">
      <div className="wrapper">
        <div className="about__photo">
          <div>
            <div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
            <div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
            </div>
            <div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
            </div>
          </div>
          <div className="about__skills">
            <div>
              <h3>Languages</h3>
              <div>
                <p>JavaScript (ES6)</p>
                <p>TypeScript</p>
                <p>HTML5</p>
                <p>CSS3</p>
              </div>
            </div>
            <div>
              <h3>Frameworks & libraries</h3>
              <p>ReactJS</p>
              <p>React Native</p>
              <p>Redux</p>
              <p>NodeJS</p>
            </div>
            <div>
              <h3>Tools</h3>
              <p>iTerm</p>
              <p>Git & Github</p>
              <p>Postman</p>
              <p>MongoDB</p>
              <p>Visual Studio Code</p>
              <p>Notion</p>
              <p>Figma</p>
              <p>Asana</p>
            </div>
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
                <span>Web and Mobile Frontend Developer 👩🏻‍💻</span> at{" "}
                <a
                  href="https://www.likeo.fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Likeo
                </a>
                ,<span> building things for web and mobile</span> with some
                awesome people. I recently graduated from{" "}
                <a
                  href="https://www.lereacteur.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Le Reacteur
                </a>{" "}
                before completing six-month internship at{" "}
                <a
                  href="https://en.weward.fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  WeWard
                </a>{" "}
                in Paris.
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
                  An object - <span>a headset</span>
                </p>
                <p>
                  A movie - <span>Parasite</span>
                </p>
                <p>
                  An animal - <span>a persian cat</span>
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
                  resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about__tag">
        <span className="tag">
          JAVASCRIPT ⚬ TYPESCRIPT ⚬ REACTJS ⚬ REACT NATIVE ⚬ REDUX ⚬ NODEJS ⚬
          HTML5 ⚬ CSS3 ⚬
        </span>
        <span className="tag">
          JAVASCRIPT ⚬ TYPESCRIPT ⚬ REACTJS ⚬ REACT NATIVE ⚬ REDUX NODEJS ⚬
          HTML5 ⚬ CSS3 ⚬
        </span>
      </div>
    </section>
  );
};

export default About;
