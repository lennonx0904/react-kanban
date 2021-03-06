import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { DragDropContext } from "react-dnd";
import MultiBackend from "react-dnd-multi-backend";
import HTML5toTouch from "react-dnd-multi-backend/lib/HTML5toTouch";

import Nav from "./component/Nav";
import Board from "./component/Board/Board";
import Backlog from "./component/Backlog/Backlog";

class App extends React.Component {
  render() {
    const { cards } = this.props;
    let cardStatus = Object.keys(cards);
    if (window.innerWidth > 991) {
      cardStatus = Object.keys(cards).slice(0, 5);
    }

    return (
      <>
        <Nav />
        <div className="view">
          <div className="view-wrapper">
            <div className="boards-wrapper d-flex flex-wrap justify-content-between">
              {cardStatus.map(status => {
                return <Board key={status} status={status} />;
              })}
            </div>
            <Backlog />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { cards: state.cards };
};

export default compose(
  connect(mapStateToProps),
  DragDropContext(MultiBackend(HTML5toTouch))
)(App);
