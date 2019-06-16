import React from "react";
import { connect } from "react-redux";
import { showNewCard } from "../../actions";

class Title extends React.Component {
  render() {
    return (
      <div className="backlog-title ">
        <div className="backlog-title-text">Backlog</div>
        <div
          className="backlog-title-text"
          onClick={() => {
            this.props.showNewCard(true);
          }}
        >
          Add New Card
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { showNewCard }
)(Title);
