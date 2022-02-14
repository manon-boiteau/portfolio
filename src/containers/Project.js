import { useParams } from "react-router-dom";
import projects from "../projects.json";
import gitHubLogo from "../assets/images/github-logo.png";
import netlifyLogo from "../assets/images/netlify-logo.png";

const Project = () => {
  let { id } = useParams();

  const project = projects.filter((project) => {
    return project.projectTitle === id;
  });

  return (
    <section className="project">
      <div className="wrapper">
        <div className="project__title">
          <h2>{project[0].projectTitle}</h2>
        </div>
        <div className="project__techno">
          {project[0].projectTechno.map((techno, idx) => {
            return <span key={idx}>{techno}</span>;
          })}
        </div>

        <div className="project__links">
          {(project[0].projectGithubLink || project[0].projectNetlifyLink) && (
            <>
              <p>See the project on</p>
              <div>
                {project[0].projectGithubLink && (
                  <div>
                    <a
                      href={project[0].projectGithubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={gitHubLogo}
                        alt="Github logo"
                        className="links-logo"
                      />
                    </a>
                  </div>
                )}
                {project[0].projectNetlifyLink && (
                  <div>
                    <a
                      href={project[0].projectNetlifyLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={netlifyLogo}
                        alt="Netlify logo"
                        className="links-logo netlify"
                      />
                    </a>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        <div className="project__intro">
          <div>
            <p>{project[0].projectIntro}</p>
          </div>
          <div>
            {/* <img /> */}
            <p>Main img</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
