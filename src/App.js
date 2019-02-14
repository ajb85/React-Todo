import React from "react";
import CreateList from "./comps/List/CreateList.js";
import CreateForm from "./comps/Form/CreateForm.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [{ "Learn setState()": true }, { "Style my Todo List": true }],
      typing: ""
    };
  } // constructor

  handleItemClick = e => {
    let { todo } = this.state;
    if (e.target.tagName === "P") {
      const index = e.target.dataset.index;
      const name = Object.keys(todo[index])[0];
      todo[index][name] = !todo[index][name];
    }

    this.setState({ todo });
  };

  handleChange = e => {
    this.setState({ typing: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { todo, typing } = this.state;

    todo.push({ [typing]: true });
    typing = "";
    this.setState({ todo, typing });
  };

  handleClear = e => {
    let { todo } = this.state;

    const selectRange = this.getSelectedRange();
    console.log(selectRange);
    todo = todo.filter((item, i) => {
      const name = Object.keys(item)[0];
      let notSelected = true;
      if (selectRange) {
        if (i >= selectRange.start && i <= selectRange.end) {
          notSelected = false;
        }
      }
      return item[name] && notSelected;
    });

    this.setState({ todo });
  };

  getSelectedRange = () => {
    const { todo } = this.state;
    const selection = window.getSelection();
    let start, end;
    if (selection.anchorNode && selection.extentNode) {
      start = Number(selection.anchorNode.parentNode.dataset.index);
      end = Number(selection.extentNode.parentNode.dataset.index);

      if (start !== start) start = todo.length - 1;
      if (end !== end) end = todo.length - 1;
      selection.empty();
    }

    if (typeof start === "number" && typeof end === "number") {
      return start < end
        ? { start: start, end: end }
        : { start: end, end: start };
    }
    return null;
  };

  render() {
    return (
      <div className="container">
        <h1>Todo List: MVP</h1>
        <CreateList
          todo={this.state.todo}
          clicked={this.handleItemClick}
          selected={this.handleSelect}
        />
        <CreateForm
          typing={this.state.typing}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}

export default App;
