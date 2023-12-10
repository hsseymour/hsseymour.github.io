import parse from "html-react-parser";
import projects from "../../resources/projects.json";

const Project = ({ currentProjectSelection }) => {
  const currentProject = projects[currentProjectSelection];

  return (
    <section className="section">
      <fieldset className="fieldset">
        <legend className="legend">
          <h3 className="subtitle">{currentProject.title}</h3>
        </legend>
        <div className="contentBlock">
          <p>{currentProject.description}</p>
          {currentProject.content.map((subTopic) => {
            if (subTopic.subHeading === "image") {
              return <img {...subTopic.img} />;
            } else {
              return (
                <>
                  {subTopic.subHeading && (
                    <h5 className="contentSubHeadings">
                      {subTopic.subHeading}
                    </h5>
                  )}
                  {subTopic.subContent && <p>{parse(subTopic.subContent)}</p>}
                </>
              );
            }
          })}
        </div>
      </fieldset>
    </section>
  );
};

export default Project;
