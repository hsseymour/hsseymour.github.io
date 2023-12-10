// a basic introduction section returned to the about page

import pages from "../resources/pages.json";

const About = () => {
  const currentPage = pages["about"];
  const content = currentPage.content.join("");

  return (
    <section className="section">
      <fieldset className="fieldset">
        <legend className="subtitle">{currentPage.title}</legend>
        <div
          className="contentBlock"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </fieldset>
    </section>
  );
};

export default About;
