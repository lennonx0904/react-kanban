import React from "react";

import BoardTitle from "./BoardTitle";
import Card from "./Card";

const tasks = [
  { title: "學 React", date: "06/12" },
  { title: "刷題", date: "06/13" },
  { title: "補托福", date: "06/14" }
];

const boardTitles = ["To-do", "Doing", "Completed", "QA", "Closed"];

class Board extends React.Component {
  render() {
    return (
      <div className="boards-wrapper">
        {boardTitles.map((boardTitle, i) => {
          return (
            <div className="board-wrapper" key={i}>
              <div className="board">
                <BoardTitle boardTitle={boardTitle} />
                <div className="board-list">
                  <Card tasks={tasks} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Board;
