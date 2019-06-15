import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { findDOMNode } from "react-dom";
import { DropTarget } from "react-dnd";
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

class CardList extends React.Component {
  render() {
    const { cards, status, connectDropTarget, isOver, canDrop } = this.props;
    return connectDropTarget(
      <div className="card-list">
        {cards[status].map(card => {
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
    );
  }
}
const mapStateToProps = state => {
  return { cards: state.cards };
};

export default compose(
  connect(mapStateToProps),
  DropTarget("CARD", dropTarget, collect)
)(CardList);
