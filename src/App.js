import React from "react";
// import "./App.css";

import Nav from "./component/Nav";
import Board from "./component/Board";

const App = () => {
  return (
    <>
      <Nav />
      <div className="view">
        <div className="view-wrapper">
          <Board />
        </div>
      </div>
    </>
  );
};

export default App;
