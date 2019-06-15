import React from "react";

const Card = props => {
  console.log('card',props.tasks);

  return (
    <>
      {props.tasks.map((task, i) => {
        return (
          <div className="card" key={i}>
            <div>{task.title}</div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
