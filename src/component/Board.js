import React from "react";
import { connect } from "react-redux";

import BoardTitle from "./BoardTitle";
import Card from "./Card";

class Board extends React.Component {
  render() {
    console.log("this.props.tasks", this.props.tasks);
    const { tasks } = this.props;
    const boardTitles = Object.keys(tasks).slice(0, 5);
    console.log("keyarr", Object.keys(tasks).slice(0, 5));
    // console.log(123,boardTitles.map(e => e.toUpperCase()));
    // boardTitles.forEach(e => console.log(e, typeof e,e.toUpperCase()));
    console.log(tasks.status);

    return (
      <div className="boards-wrapper">
        {boardTitles.map((boardTitle, i) => {
          return (
            <div className="board-wrapper" key={i}>
              <div className="board">
                <BoardTitle boardTitle={boardTitle.toUpperCase()} />
                <div className="board-list">
                  <Card tasks={tasks[boardTitle]} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log('redux-state',state);
  return { tasks: state.tasks };
};

export default connect(mapStateToProps)(Board);
