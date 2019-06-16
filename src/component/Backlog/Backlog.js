import React from "react";
import { connect } from "react-redux";
import { addNewCard } from "../../actions";
import Card from "../Card";
import AddNewCard from "./AddNewCard";
import Title from "./Title";
import "./backlog.css";

class Backlog extends React.Component {
  state = { NewCard: false };

  showNewCard = () => {
    this.setState({ NewCard: true });
  };

  hideNewCard = () => {
    this.setState({ NewCard: false });
  };

  render() {
    const { cards } = this.props;
    // console.log(cards.backlog);
    return (
      <div className="backlog-wrapper container-fluid fixed-bottom mb-2">
        <Title showNewCard={this.showNewCard} />
        <div className="backlog-content d-flex flex-wrap container-fluid p-0">
          {cards.backlog.map((card, index) => {
            return (
              <Card
                key={index}
                // id={card.id}
                index={index}
                title={card.title}
                status={card.status}
              />
            );
          })}
          {this.state.NewCard ? (
            <AddNewCard hideNewCard={this.hideNewCard} />
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cards: state.cards };
};

export default connect(
  mapStateToProps,
  { addNewCard }
)(Backlog);
