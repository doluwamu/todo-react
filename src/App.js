import React from "react";
import "./App.css";
import TodoDisplay from "./TodoDisplay";
import TodoInput from "./TodoInput";

class App extends React.Component {
  state = {
    todos: [],
    completed: false,
    value: "",
  };

  handleSubmit = (event) => {
    const { value } = this.state;
    event.preventDefault();
    if (value && value !== "") {
      this.setState({
        todos: [...this.state.todos, { id: this.id, title: this.state.value }],
      });
      return this.clearInput;
    }
    return;
  };

  handleClick = (event) => {
    this.handleSubmit(event);
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleDelete = (id) => {
    const { todos } = this.state;
    const removeTodo = todos.filter((todo) => todo.id !== id);
    this.setState({
      todos: removeTodo,
    });
  };

  handleEdit = (id) => {
    const { todos } = this.state;
    const todoIndex = todos.findIndex((t) => t.id === id);

    this.setState({
      value: todos[todoIndex].title,
    });
    this.handleDelete(id);
  };

  get id() {
    return Math.random().toString().replace("0.", "");
  }

  get clearInput() {
    return this.setState({
      value: "",
    });
  }

  render() {
    const { todos, value } = this.state;
    return (
      <div className="todo__app container">
        <div className="todo__header">
          <h1 className="header__text">Todos</h1>
        </div>
        <div className="todo__body">
          <TodoDisplay
            todos={todos}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
          />
        </div>
        <TodoInput
          value={value}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
