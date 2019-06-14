import React from "react";

import BoardTitle from "./BoardTitle";
import Card from "./Card";

const tasks = [
  { title: "學 React", date: "06/12" },
  { title: "刷題", date: "06/13" },
  { title: "補托福", date: "06/14" }
];

class Board extends React.Component {
  render() {
    return (
      <div className="board-wrapper">
        <div className="board">
          <BoardTitle />
          <div className="board-list">
            <Card tasks={tasks} />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
