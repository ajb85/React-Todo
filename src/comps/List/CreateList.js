import React from "react";
import "./list.css";

// props: todo, clicked
export default props => {
  let fullList = props.todo.map((itemObj, i) => {
    let name = Object.keys(itemObj)[0];
    let className = "";
    if (!itemObj[name]) className = "strike";
    return (
      <p key={i} onClick={props.clicked} className={className} data-index={i}>
        {name}
      </p>
    );
  });

  return <div className="todoList">{fullList}</div>;
};
