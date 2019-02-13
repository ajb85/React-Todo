import React from "react";
import CreateList from "./comps/List/CreateList.js";
import CreateForm from "./comps/Form/CreateForm.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [{ "Learn setState()": true }, { "Style my Todo List": true }],
      typing: "",
      selected: []
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
    let { todo, selected } = this.state;
    console.log("Selected before: ", selected);
    todo = todo.filter(item => {
      const name = Object.keys(item)[0];
      const isSelected = selected.indexOf(name) > -1;
      if (isSelected) isSelected.splice(selected.indexOf(name), 1);
      return item[name] || isSelected;
    });

    this.setState({ todo, selected });
  };

  render() {
    return (
      <div className="container">
        <h1>Todo List: MVP</h1>
        <CreateList todo={this.state.todo} clicked={this.handleItemClick} />
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
