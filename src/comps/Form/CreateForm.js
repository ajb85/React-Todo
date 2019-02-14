import React from "react";
import CreateButton from "./CreateButton.js";
import "./form.css";
// props: typing, handleChange, handleSubmit, handleClear
export default props => {
  function preventSubmit(e) {
    e.preventDefault();
    props.handleSubmit();
  }

  return (
    <form onSubmit={preventSubmit} className="form">
      <input
        type="text"
        placeholder="...to do"
        value={props.typing}
        onChange={props.handleChange}
      />
      <CreateButton type={"submit"} children={"Add To Do"} />
      <CreateButton
        children={"Clear Completed"}
        handleClear={props.handleClear}
        type="button"
      />
    </form>
  );
};
