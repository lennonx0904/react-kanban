import React from "react";

const Card = props => {
  console.log(props.tasks);

  return (
    <>
      {props.tasks.map((task, i) => {
        return (
          <div className="card" key={i}>
            <div>{task.title}</div>
            <div>{task.date}</div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
