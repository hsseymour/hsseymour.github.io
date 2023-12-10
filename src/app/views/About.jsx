// a basic introduction section returned to the about page

import pages from "../resources/pages.json";

const About = () => {
  const currentPage = pages["about"];

  return (
    <section className="section">
      <fieldset className="fieldset">
        <legend className="legend">
          <h2 className="subtitle">{currentPage.title}</h2>
        </legend>
        <div className="contentBlock">
          <h4 className="contentSubHeadings">{currentPage.heading}</h4>
          <p>{currentPage.description}</p>
          {currentPage.content.map((subTopic) => (
            <>
              <h5 className="contentSubHeadings">{subTopic.subHeading}</h5>
              <p>{subTopic.subContent}</p>
            </>
          ))}
        </div>
      </fieldset>
    </section>
  );
};

export default About;
