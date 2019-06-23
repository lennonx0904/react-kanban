import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { DragSource } from "react-dnd";
import { deleteCard } from "../actions";

const cardSource = {
  beginDrag(props) {
    return { ...props };
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
    this.props.deleteCard(index, status);
  };

  render() {
    const { id, index, title, status, connectDragSource } = this.props;
    return connectDragSource(
      <div className="card py-1 my-2" key={id} index={index} status={status}>
        <div>
          {title}
          <button
            type="button"
            className="close pr-1"
            aria-label="Close"
            onClick={this.getCardInfo}
          >
            <span aria-hidden="true" index={index} status={status}>
              &times;
            </span>
          </button>
        </div>
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
