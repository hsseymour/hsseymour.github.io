const Header = ({ setCurrentContentSelection }) => {
  const handleClick = (value) => {
    setCurrentContentSelection(value);
  };

  return (
    <header className="section">
      <fieldset className="fieldset">
        <legend className="legend">
          <h1 className="title">Harry Seymour</h1>
        </legend>
        <nav>
          <ul className="contentList primary">
            <li className="listItem" onClick={() => handleClick(1)}>
              About
            </li>
            <li className="listItem" onClick={() => handleClick(2)}>
              Projects
            </li>
            <li className="listItem" onClick={() => handleClick(3)}>
              Contact
            </li>
          </ul>
        </nav>
      </fieldset>
    </header>
  );
};

export default Header;
