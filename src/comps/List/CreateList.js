import React from "react";
import "./list.css";

// props: todo, clicked
export default props => {
  let fullList = props.todo.map((itemObj, i) => {
    let className = "";
    if (itemObj.complete) className = "complete";
    return (
      <li
        key={i}
        onMouseDown={props.clicked.bind(this, i)}
        className={className}
        data-index={i}
      >
        {itemObj.name}
      </li>
    );
  });

  return <ul className="todoList">{fullList}</ul>;
};
