import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { DropTarget } from "react-dnd";
import { updateCardStatus } from "../../actions";
import BoardTitle from "./BoardTitle";
import Card from "../Card";
import AddNewCard from "../Backlog/AddNewCard";
import "./board.css";

const dropTarget = {
  drop(props, monitor, component) {
    const card = monitor.getItem();
    props.updateCardStatus(card.index, card.status, props.status);
    return { moved: true };
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
};

class Board extends React.Component {
  render() {
    const { cards, status, connectDropTarget, showNewCard } = this.props;
    return connectDropTarget(
      <div className="board-wrapper px-xl-3 px-md-2 mt-2">
        <div className="board  p-2 rounded-lg overflow-auto max-vh-60">
          <BoardTitle boardTitle={status.toUpperCase()} />
          <div className="card-list">
            {cards[status].map((card, index) => {
              return (
                <Card
                  key={index}
                  index={index}
                  title={card.title}
                  status={card.status}
                />
              );
            })}
            {status === "backlog" && showNewCard ? <AddNewCard /> : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cards: state.cards, showNewCard: state.showNewCard };
};

export default compose(
  connect(
    mapStateToProps,
    { updateCardStatus }
  ),
  DropTarget("CARD", dropTarget, collect)
)(Board);
