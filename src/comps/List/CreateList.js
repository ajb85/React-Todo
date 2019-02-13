import React, { Component } from "react";
import "./list.css";

// props: todo
export default props => {
  let fullList = props.todo.map((itemObj, i) => {
    let name = Object.keys(itemObj)[0];
    let className = "";
    if (!itemObj[name]) className = "strike";
    return (
      <p key={i} className={className}>
        {name}
      </p>
    );
  });

  return <div className="todoList">{fullList}</div>;
};
