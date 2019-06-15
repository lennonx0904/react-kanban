import React from "react";
import { connect } from "react-redux";

import BoardTitle from "./BoardTitle";
import CardList from "./CardList";

class Board extends React.Component {
  render() {
    // console.log("this.props.Board", this.props);
    const { cards } = this.props;
    const statusTitle = Object.keys(cards).slice(0, 5);

    return (
      <div className="boards-wrapper">
        {statusTitle.map(status => {
          return (
            <div className="board-wrapper" key={status}>
              <div className="board">
                <BoardTitle boardTitle={status.toUpperCase()} />
                <CardList status={status} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cards: state.cards };
};

export default connect(mapStateToProps)(Board);
