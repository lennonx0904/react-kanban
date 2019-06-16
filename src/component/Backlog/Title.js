import React from "react";
import { connect } from "react-redux";
import { showNewCard } from "../../actions";
import plus from "../../img/plus.png";

class Title extends React.Component {
  render() {
    return (
      <div className="backlog-title ">
        <div className="backlog-title-text">
          Backlog
          <img
            className="add-card-mobile"
            src={plus}
            alt=""
            onClick={() => {
              this.props.showNewCard(true);
            }}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { showNewCard }
)(Title);
