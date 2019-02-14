import React from "react";
import CreateList from "./comps/List/CreateList.js";
import CreateForm from "./comps/Form/CreateForm.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [
        { name: "Navigate to my To Do list", complete: true },
        {
          name: "Learn I can click an item to complete it",
          complete: false
        },
        {
          name: 'Click "Clear Completed" to remove completed items.',
          complete: false
        },
        {
          name: "Highlight items then clear to remove multiples at once",
          complete: false
        }
      ],
      typing: ""
    };
  } // constructor

  handleItemClick = (i, e) => {
    let { todo } = this.state;
    if (e.target.tagName === "LI") {
      todo[i].complete = !todo[i].complete;
    }

    this.setState({ todo });
  };

  handleChange = e => {
    this.setState({ typing: e.target.value });
  };

  handleSubmit = () => {
    let { todo, typing } = this.state;

    todo.push({ name: typing, complete: false });
    typing = "";
    this.setState({ todo, typing });
  };

  handleClear = () => {
    let { todo } = this.state;

    const selectRange = this.getSelectedRange();
    todo = todo.filter((item, i) => {
      let notSelected = true;
      if (selectRange) {
        if (i >= selectRange.start && i <= selectRange.end) {
          notSelected = false;
        }
      }
      return !item.complete && notSelected;
    });
    console.log(todo);
    this.setState({ todo });
  };

  getSelectedRange = () => {
    const { todo } = this.state;
    const selection = window.getSelection();
    let start, end;
    if (selection.anchorNode && selection.focusNode) {
      start = Number(selection.anchorNode.parentNode.dataset.index);
      end = Number(selection.focusNode.parentNode.dataset.index);

      if (isNaN(start)) start = todo.length - 1;
      if (isNaN(end)) end = todo.length - 1;

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
    //console.log(this.state.todo);
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
