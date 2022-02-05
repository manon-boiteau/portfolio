import projects from "../projects.json";

const Projects = () => {
  return (
    <section className="projects">
      <div className="wrapper">
        <nav>
          <span>All</span>
          <span>Bootcamp</span>
          <span>At work</span>
          <span>Freelance</span>
        </nav>

        <div className="projects__grid">
          {projects.map((project, idx) => {
            return (
              <div key={idx} className="project__card">
                <img />
                <div>
                  <p>{project.projectTitle}</p>
                </div>
              </div>
            );
          })}
          {/* <div>1</div>
          <div>2</div>
          <div>3</div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
