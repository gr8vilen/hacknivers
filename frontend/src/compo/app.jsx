import React from "react";

import {
  BrowserRouter as Router,

} from "react-router-dom";

import Background from "./background/background";

import Animrouts from "./anim-routs";

export const App = () => {
  return (
    <Router>
      <Background />

      <Animrouts />
    </Router>
  );
};

export default App;
