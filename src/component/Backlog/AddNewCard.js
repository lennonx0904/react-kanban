import React from "react";
import { connect } from "react-redux";
import { addNewCard } from "../../actions";

class AddNewCard extends React.Component {
  state = { title: "" };

  changeInputState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = () => {
    const title = this.state.title;
    const data = { title: title, status: "backlog" };
    this.props.addNewCard(data);
    this.props.hideNewCard();
  };

  render() {
    console.log(this.state);
    console.log("2222", this.props);

    return (
      <div className="card add-card">
        <input
          type="text"
          placeholder="Card Title"
          name="title"
          onChange={this.changeInputState}
        />
        <div className="flex">
          <button onClick={this.submitHandler}>submit</button>
          <button onClick={this.props.hideNewCard}>X</button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addNewCard }
)(AddNewCard);
