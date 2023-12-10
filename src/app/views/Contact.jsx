import pages from "../resources/pages.json";

const Contact = () => {
  const currentPage = pages["contact"];
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

export default Contact;
