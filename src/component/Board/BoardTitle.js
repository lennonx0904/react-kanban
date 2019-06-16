import React from "react";
import { connect } from "react-redux";
import { showNewCard } from "../../actions";
import plus from "../../img/plus.png";

class BoardTitle extends React.Component {
  render() {
    const { boardTitle, showNewCard } = this.props;
    return (
      <div className="board-title center-justify d-flex flex-column justify-content-center align-items-center">
        {boardTitle}
        {boardTitle === "BACKLOG" ? (
          <img
            className="add-card-mobile"
            src={plus}
            alt=""
            onClick={() => {
              showNewCard(true);
            }}
          />
        ) : null}
      </div>
    );
  }
}

export default connect(
  null,
  { showNewCard }
)(BoardTitle);
