import projects from "../resources/projects.json";

const Projects = ({ setCurrentProjectSelection }) => {
  const ListProjects = Object.keys(projects).map((project, index) => (
    <li
      key={index}
      className="listItem"
      onClick={() => setCurrentProjectSelection(project)}
    >
      ⇢ {projects[project].title}
    </li>
  ));

  return (
    <section className="section">
      <fieldset className="fieldset">
        <legend className="legend">
          <h2 className="subtitle">Projects</h2>
        </legend>
        <ul className="contentList secondary">{ListProjects}</ul>
      </fieldset>
    </section>
  );
};

export default Projects;
