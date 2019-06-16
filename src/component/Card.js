import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { DragSource } from "react-dnd";
import { deleteCard } from "../actions";

const cardSource = {
  beginDrag(props) {
    // console.log("beginDrag", props);
    // console.log("beginDragindex", props.index);

    // 會將所有 <Card /> 的 props 帶到 onDrop Component
    return { ...props };
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      // You can check whether the drop was successful
      // or if the drag ended but nobody handled the drop
      return;
    }

    // When dropped on a compatible target, do something.
    // Read the original dragged item from getItem():
    const item = monitor.getItem();
    // console.log("item", item);

    // You may also read the drop result from the drop target
    // that handled the drop, if it returned an object from
    // its drop() method.
    const dropResult = monitor.getDropResult();
    // console.log("dropResult", dropResult);

    // This is a good place to call some Flux action
    // CardActions.moveCardToList(item.id, dropResult.listId)
  }
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

class Card extends React.Component {
  getCardInfo = e => {
    const index = e.target.getAttribute("index");
    const status = e.target.getAttribute("status");
    // console.log(index, status);
    this.props.deleteCard(index, status);
  };

  render() {
    const {
      id,
      index,
      title,
      status,
      connectDragSource,
      isDragging
    } = this.props;
    return connectDragSource(
      <div
        className="card p-1 my-2"
        key={id}
        index={index}
        // onDragOver={this.findDropIndex}
      >
        {/* <i className="delete-btn far fa-trash-alt" /> */}
        <div>
          {title}
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={this.getCardInfo}
          >
            <span
              aria-hidden="true"
              index={index}
              status={status}
            >
              &times;
            </span>
          </button>
        </div>

        {/* {isDragging} */}
      </div>
    );
  }
}

export default compose(
  connect(
    null,
    { deleteCard }
  ),
  DragSource("CARD", cardSource, collect)
)(Card);
