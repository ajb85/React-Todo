import React from "react";
// props: type, children
export default props => {
  return <button type={props.type}>{props.children}</button>;
};
