import React from "react";
import CreateList from "./comps/List/CreateList.js";
import CreateForm from "./comps/Form/CreateForm.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [{ "Learn setState()": false, "Style my Todo List": false }]
    };
  }
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
