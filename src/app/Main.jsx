import { useState } from "react";
import { Header, Projects, About, Contact } from "./views";
import { Project } from "./components/complex";

const Main = () => {
  const [currentContentSelection, setCurrentContentSelection] = useState(0);
  const [currentProjectSelection, setCurrentProjectSelection] = useState(null);

  if (currentContentSelection !== 2 && currentProjectSelection !== null) {
    setCurrentProjectSelection(null);
  }

  return (
    <div className="mainDiv">
      <Header setCurrentContentSelection={setCurrentContentSelection} />
      {currentContentSelection === 1 && <About />}
      {currentProjectSelection && (
        <Project currentProjectSelection={currentProjectSelection} />
      )}
      {currentContentSelection === 2 && (
        <Projects setCurrentProjectSelection={setCurrentProjectSelection} />
      )}
      {currentContentSelection === 3 && <Contact />}
    </div>
  );
};

export default Main;
