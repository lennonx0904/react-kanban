import React from "react";
// import "./App.css";

import Nav from "./component/Nav";
import Board from "./component/Board";
import Backlog from './component/Backlog'

const App = () => {
  return (
    <>
      <Nav />
      <div className="view">
        <div className="view-wrapper">
          <Board />
          <Backlog/>
        </div>
      </div>
    </>
  );
};

export default App;
