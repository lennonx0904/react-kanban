import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { DragSource } from "react-dnd";
import { deleteCard } from "../actions";

const cardSource = {
  beginDrag(props) {
    console.log("beginDrag", props);
    // console.log("beginDragindex", props.index);

    // 會將所有 <Card /> 的 props 帶到 onDrop Component
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
    // console.log(index, status);
    this.props.deleteCard(index, status);
  };

  render() {
    const { id, index, title, status, connectDragSource } = this.props;
    return connectDragSource(
      <div className="card p-1 my-2" key={id} index={index}>
        <div>
          {title}
          <button
            type="button"
            className="close"
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
