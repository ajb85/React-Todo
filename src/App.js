import React from "react";
import CreateList from "./comps/List/CreateList.js";
import CreateForm from "./comps/Form/CreateForm.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [{ "Learn setState()": true }, { "Style my Todo List": true }]
    };
  } // constructor

  handleItemClick = e => {
    let { todo } = this.state;
    if (e.target.tagName === "P") {
      //console.log(e.target.dataset.index);
      const index = e.target.dataset.index;
      const name = Object.keys(todo[index])[0];

      todo[index][name] = !todo[index][name];
    }

    this.setState({ todo });
  };

  handleSubmit = newItem => {
    let { todo } = this.state;
    todo.push({ [newItem]: true });

    this.setState({ todo });
  };

  render() {
    return (
      <div className="container">
        <h1>Todo List: MVP</h1>
        <CreateList todo={this.state.todo} clicked={this.handleItemClick} />
        <CreateForm />
      </div>
    );
  }
}

export default App;
