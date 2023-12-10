import projects from "../../resources/projects.json";

const Project = ({ currentProjectSelection }) => {
  const currentProject = projects[currentProjectSelection];
  const content = currentProject.content.join("");

  return (
    <section className="section">
      <fieldset className="fieldset">
        <legend className="subtitle">{currentProject.title}</legend>
        <div
          className="contentBlock"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </fieldset>
    </section>
  );
};

export default Project;
