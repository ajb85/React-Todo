import React from "react";
import CreateInput from "./CreateInput.js";
import CreateButton from "./CreateButton.js";
import "./form.css";
// props: typing, handleChange, handleSubmit
export default props => {
  return (
    <form onSubmit={props.handleSubmit} className="form">
      <CreateInput typing={props.typing} handleChange={props.handleChange} />
      <CreateButton type={"submit"} children={"Add Todo"} />
      <CreateButton children={"Clear Completed"} />
    </form>
  );
};
