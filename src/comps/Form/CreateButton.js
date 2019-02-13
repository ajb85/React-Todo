import React from "react";
// props: type, children, handleClear
export default props => {
  return (
    <button type={props.type} onClick={props.handleClear}>
      {props.children}
    </button>
  );
};
