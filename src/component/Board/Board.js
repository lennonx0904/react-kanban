import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { findDOMNode } from "react-dom";
import { DropTarget } from "react-dnd";
import { updateCardStatus } from "../../actions";
import BoardTitle from "./BoardTitle";
import Card from "../Card";
import "./board.css";

const dropTarget = {
  drop(props, monitor, component) {
    const card = monitor.getItem();

    // console.log("cardindex", card.index, "propsindex", props.index);
    console.log("pos", props);
    console.log("component", findDOMNode(component));
    console.log(card.title);

    props.updateCardStatus(card.index, card.status, props.status);

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
    const { cards, status, connectDropTarget } = this.props;
    return connectDropTarget(
      <div className="board-wrapper col p-1 mt-2">
        <div className="board container-fluid p-2 rounded-lg overflow-auto max-vh-60">
          <BoardTitle boardTitle={status.toUpperCase()} />
          {cards[status].map((card, index) => {
            return (
              <Card
                key={index}
                //   id={index}
                index={index}
                title={card.title}
                status={card.status}
              />
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

export default compose(
  connect(
    mapStateToProps,
    { updateCardStatus }
  ),
  DropTarget("CARD", dropTarget, collect)
)(Board);
