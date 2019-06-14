import React from "react";

const BoardTitle = props => {
  console.log(props.boardTitle);

  return <div className="board-title center-justify">{props.boardTitle}</div>;
};

export default BoardTitle;
