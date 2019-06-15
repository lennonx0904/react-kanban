import React from "react";
import { connect } from "react-redux";
import { addNewCard } from "../actions";
import Card from "./Card";

class Backlog extends React.Component {
  render() {
    const { cards } = this.props;
    return (
      <div className="backlog-wrapper">
        <div className="backlog-title">
          <div className="backlog-title-text">Backlog</div>
          <div
            className="backlog-title-text"
            onClick={() => {
              console.log("add new card");
              this.props.addNewCard({
                id: "33",
                title: "new issue",
                status: "backlog"
              });
            }}
          >
            Add New Card
          </div>
        </div>
        <div className="backlog-content">
          {/* <Card cards={this.props.cards.backlog} /> */}
          {console.log("cards.backlog", cards.backlog)}
          {cards.backlog.map(card => {
            return (
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                status={card.status}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("redux-state", state);
  return { cards: state.cards };
};

export default connect(
  mapStateToProps,
  { addNewCard }
)(Backlog);
