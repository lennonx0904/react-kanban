import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { findDOMNode } from "react-dom";
import { DropTarget } from "react-dnd";

import BoardTitle from "./BoardTitle";
import Card from "./Card";

const dropTarget = {
  drop(props, monitor, component) {
    // 此處已經可以得到 props(CardWall) 與 item (Card props)
    const card = monitor.getItem();
    console.log("dropCard:", card); // card props
    console.log("dropBoard", props); // card Board props
    // const { id } = card;
    // const { updateCardStatus, status: targetStatus } = props;

    // 更新 Card status
    // updateCardStatus(id, targetStatus);

    return { moved: true };
  }
};

const collect = (connect, monitor) => {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
};

class Board extends React.Component {
  render() {
    console.log("this.props.Board", this.props);
    const { cards, connectDropTarget, isOver, canDrop } = this.props;
    const boardTitles = Object.keys(cards).slice(0, 5);

    return (
      <div className="boards-wrapper">
        {boardTitles.map(boardTitle => {
          return connectDropTarget(
            <div className="board-wrapper" key={boardTitle}>
              <div className="board">
                <BoardTitle boardTitle={boardTitle.toUpperCase()} />
                <div className="board-list">
                  {cards[boardTitle].map(card => {
                    return (
                      <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        status={card.status}
                      />
                    );
                  })}
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
  return { cards: state.cards };
};

export default compose(
  connect(mapStateToProps),
  DropTarget("CARD", dropTarget, collect)
)(Board);
