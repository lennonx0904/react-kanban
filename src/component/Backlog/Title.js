import React from "react";

const Title = props => {    
  return (
    <div className="backlog-title ">
      <div className="backlog-title-text">Backlog</div>
      <div
        className="backlog-title-text"
        onClick={() => {
          props.showNewCard();
        }}
      >
        Add New Card
      </div>
    </div>
  );
};

export default Title;
