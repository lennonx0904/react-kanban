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
    if(title === '') return;
    const data = { title: title, status: "backlog" };
    this.props.addNewCard(data);
    this.props.hideNewCard();
  };

  render() {
    return (
      <div className="card add-card">
        <input
          type="text"
          placeholder="Card Title"
          name="title"
          onChange={this.changeInputState}
        />
        <div className="flex justify-content-around">
          <button onClick={this.submitHandler} className='btn btn-primary btn-sm mx-3'>submit</button>
          <button onClick={this.props.hideNewCard} className='btn btn-primary btn-sm mx-3'>cancel</button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addNewCard }
)(AddNewCard);
