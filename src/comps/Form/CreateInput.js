import React from "react";
// props: typing, handleChange
export default props => {
  return (
    <input
      type="text"
      placeholder="...to do"
      value={props.typing}
      onChange={props.handleChange}
    />
  );
};
