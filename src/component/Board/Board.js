import React from "react";
import { connect } from "react-redux";

import BoardTitle from "./BoardTitle";
import CardList from "./CardList";
import "./board.css";

class Board extends React.Component {
  render() {
    // console.log("this.props.Board", this.props);
    const { cards } = this.props;
    const statusTitle = Object.keys(cards).slice(0, 5);

    return (
      <div className="boards-wrapper container-fluid">
        <div className="row">
          {" "}
          {/*bootstrap */}
          {statusTitle.map(status => {
            return (
              <div className="board-wrapper col p-1 mt-2 " key={status}>
                <div className="board container-fluid p-2 rounded-lg overflow-auto max-vh-60">
                  <BoardTitle boardTitle={status.toUpperCase()} />
                  <CardList status={status} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cards: state.cards };
};

export default connect(mapStateToProps)(Board);
