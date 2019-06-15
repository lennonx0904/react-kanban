import React from "react";
// import {compose} from 'redux';
import { DragSource } from "react-dnd";

const cardSource = {
  beginDrag(props) {
    console.log("beginDrag", props);

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
    console.log("item", item);

    // You may also read the drop result from the drop target
    // that handled the drop, if it returned an object from
    // its drop() method.
    const dropResult = monitor.getDropResult();
    console.log("dropResult", dropResult);

    // This is a good place to call some Flux action
    // CardActions.moveCardToList(item.id, dropResult.listId)
  }
};

const collect = (connect, monitor) => {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
};

class Card extends React.Component {
  render() {
    // console.log("card", this.props);
    const { id,title, connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div className="card" key={id}>
        <div>{title}</div>
        {isDragging}
      </div>
    );
  }
}

export default DragSource("CARD", cardSource, collect)(Card);
