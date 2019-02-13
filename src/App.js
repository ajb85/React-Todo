import React from "react";
import CreateList from "./comps/List/CreateList.js";
import CreateForm from "./comps/Form/CreateForm.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [{ "Learn setState()": true }, { "Style my Todo List": true }]
    };
  }

  updateTodo = newItem => {
    let { todo } = this.state;
    todo.push({ [newItem]: true });

    this.setState({ todo });
  };
  render() {
    return (
      <div className="container">
        <h1>Todo List: MVP</h1>
        <CreateList todo={this.state.todo} />
        <CreateForm />
      </div>
    );
  }
}

export default App;
