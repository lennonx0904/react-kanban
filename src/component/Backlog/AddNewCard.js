import React from "react";
import { connect } from "react-redux";
import { showNewCard, addNewCard } from "../../actions";

class AddNewCard extends React.Component {
  state = { title: "" };

  changeInputState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = () => {
    const title = this.state.title;
    if (title === "") return;
    const data = { title: title, status: "backlog" };
    this.props.addNewCard(data);
    this.props.showNewCard(false);
  };

  render() {
    return (
      <div className="card add-card my-2">
        <input
          type="text"
          placeholder="Card Title"
          name="title"
          onChange={this.changeInputState}
        />
        <div className="btns mt-2">
          <button
            onClick={this.submitHandler}
            className="btn btn-primary btn-sm mx-2"
          >
            submit
          </button>
          <button
            onClick={() => {
              this.props.showNewCard(false);
            }}
            className="btn btn-primary btn-sm mx-2"
          >
            cancel
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { showNewCard, addNewCard }
)(AddNewCard);
