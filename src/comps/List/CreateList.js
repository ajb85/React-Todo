import React from "react";
import "./list.css";

// props: todo, clicked, search, selected
export default props => {
  // If the user has something in the search field, this will filter out
  // any results that aren't a substring of the list item
  // Turn remaining items into <li>'s
  let fullList = props.todo
    .filter(itemObj =>
      itemObj.name.toLowerCase().includes(props.search.toLowerCase())
    )
    .map((itemObj, i) => {
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
