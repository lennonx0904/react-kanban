import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { findDOMNode } from "react-dom";
import { DropTarget } from "react-dnd";
import { updateCardStatus } from "../actions";
import Card from "./Card";

const dropTarget = {
  drop(props, monitor, component) {
    const card = monitor.getItem();

    // console.log("cardindex", card.index, "propsindex", props.index);
    // console.log("pos", props);
    // console.log("component", findDOMNode(component));

    props.updateCardStatus(card.index, card.status, props.status);

    return { moved: true };
  },
  hover(props, monitor, component) {
    // This is fired very often and lets you perform side effects
    // in response to the hover. You can't handle enter and leave
    // here—if you need them, put monitor.isOver() into collect() so you
    // can just use componentDidUpdate() to handle enter/leave.
    // You can access the coordinates if you need them
    const clientOffset = monitor.getClientOffset();
    const componentRect = findDOMNode(component).getBoundingClientRect();

    // You can check whether we're over a nested drop target
    const isJustOverThisOne = monitor.isOver({ shallow: true });

    // You will receive hover() even for items for which canDrop() is false
    const canDrop = monitor.canDrop();
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
  //   findDropIndex = e => {
  //     console.log("可以嗎...", e);
  //   };
  render() {
    // console.log("this.props.CardList", this.props.cards);
    const { cards, status, connectDropTarget, isOver, canDrop } = this.props;

    return connectDropTarget(
      <div className="card-list">
        {cards[status].map((card, index) => {
          return (
            <Card
              key={index}
            //   id={index}
              index={index}
              title={card.title}
              status={card.status}
              //   findDropIndex={this.findDropIndex}
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
  connect(
    mapStateToProps,
    { updateCardStatus }
  ),
  DropTarget("CARD", dropTarget, collect)
)(CardList);
