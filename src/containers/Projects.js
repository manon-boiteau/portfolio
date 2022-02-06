import { useState, useEffect } from "react";
import projects from "../projects.json";

const Projects = () => {
  const [categorySelected, setCategorySelected] = useState("all");
  const [listOfProjects, setListOfProjects] = useState(projects);
  const [noProjectsMsg, setNoProjectsMsg] = useState("");

  useEffect(() => {
    const filteredCategory = (allProjects) => {
      const filteredCategories = allProjects.filter(
        (project) => project.projectCategory === categorySelected
      );
      if (filteredCategories.length !== 0) {
        setListOfProjects(filteredCategories);
      } else if (
        filteredCategories.length === 0 &&
        categorySelected === "all"
      ) {
        setListOfProjects(projects);
      } else {
        setListOfProjects([]);
        setNoProjectsMsg("Be patient! Nice projects are coming 😇");
      }
    };
    filteredCategory(projects);
  }, [categorySelected]);

  return (
    <section className="projects">
      <div className="wrapper">
        <nav>
          <span
            onClick={() => setCategorySelected("all")}
            style={{ fontWeight: categorySelected === "all" && 700 }}
          >
            All
          </span>
          <span
            onClick={() => setCategorySelected("bootcamp")}
            style={{ fontWeight: categorySelected === "bootcamp" && 700 }}
          >
            Bootcamp
          </span>
          <span
            onClick={() => setCategorySelected("atWork")}
            style={{ fontWeight: categorySelected === "atWork" && 700 }}
          >
            At work
          </span>
          <span
            onClick={() => setCategorySelected("freelance")}
            style={{ fontWeight: categorySelected === "freelance" && 700 }}
          >
            Freelance
          </span>
        </nav>

        <div className="projects__grid">
          {listOfProjects.length !== 0 ? (
            listOfProjects.map((project, idx) => {
              return (
                <div key={idx} className="project__card">
                  <img />
                  <div>
                    <p>{project.projectTitle}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p>{noProjectsMsg}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
