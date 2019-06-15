import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { addNewTask } from "../actions";

class Backlog extends React.Component {
  render() {
    return (
      <div className="backlog-wrapper">
        <div className="backlog-title">
          <div className="backlog-title-text">Backlog</div>
          <div
            className="backlog-title-text"
            onClick={() => {
              console.log("add new task");
              this.props.addNewTask({
                id: "33",
                title: "new issue",
                status: "backlog"
              });
            }}
          >
            Add New Task
          </div>
        </div>
        <div className="backlog-content">
          <Card tasks={this.props.tasks.backlog} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log('redux-state',state);
  return { tasks: state.tasks };
};

export default connect(
  mapStateToProps,
  { addNewTask }
)(Backlog);
