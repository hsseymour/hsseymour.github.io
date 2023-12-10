import pages from "../resources/pages.json";

const Contact = () => {
  const currentPage = pages["contact"];
  const content = currentPage.content.join("");

  return (
    <section className="section">
      <fieldset className="fieldset">
        <legend className="legend">
          <h2 className="subtitle">{currentPage.title}</h2>
        </legend>
        <div
          className="contentBlock"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </fieldset>
    </section>
  );
};

export default Contact;
