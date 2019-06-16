import React from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

// import "./App.css";

import Nav from "./component/Nav";
import Board from "./component/Board/Board";
import Backlog from "./component/Backlog/Backlog";

const App = () => {
  return (
    <>
      <Nav />
      <div className="view">
        <div className="view-wrapper">
          <Board />
          <Backlog />
        </div>
      </div>
    </>
  );
};

export default DragDropContext(HTML5Backend)(App);
