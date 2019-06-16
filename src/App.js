import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import Nav from "./component/Nav";
import Board from "./component/Board/Board";
import Backlog from "./component/Backlog/Backlog";

class App extends React.Component {
  render() {
    const { cards } = this.props;
    const cardStatus = Object.keys(cards).slice(0, 5);
    return (
      <>
        <Nav />
        <div className="view">
          <div className="view-wrapper">
            <div className="boards-wrapper container-fluid">
              <div className="row">
                {cardStatus.map(status => {
                  return <Board key={status} status={status} />;
                })}
              </div>
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
  DragDropContext(HTML5Backend)
)(App);
