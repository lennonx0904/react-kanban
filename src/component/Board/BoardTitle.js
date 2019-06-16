import React from "react";
import plus from "../../img/plus.png";

const BoardTitle = props => {
  return (
    <div className="board-title center-justify d-flex flex-column justify-content-center align-items-center">
      {props.boardTitle}
      {props.boardTitle === "BACKLOG" ? <img className="add-card-mobile" src={plus} alt="" /> : null}
    </div>
  );
};

export default BoardTitle;
