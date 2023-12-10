// index js imports the style sheet and accesses the site proper through the main component

import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./app/Main";
import "./app/resources/styles/stylesheet.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
