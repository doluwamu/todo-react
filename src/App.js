import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    todos: [
      { id: this.id, title: "Wash clothes" },
      { id: this.id, title: "Eat some food" },
    ],
    completed: false,
    value: "",
  };

  get id() {
    return Math.random().toString().replace("0.", "");
  }

  handleSubmit = (event) => {
    const { value } = this.state;
    event.preventDefault();
    if (value && value !== "") {
      this.setState({
        todos: [...this.state.todos, { id: this.id, title: this.state.value }],
      });
      this.clearInput();
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

  clearInput = () => {
    this.setState({
      value: "",
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo__app container">
        <div className="todo__header">
          <h1 className="header__text">Todos</h1>
        </div>
        <div className="todo__body">
          {todos.length !== 0 ? (
            todos.map((todo) => {
              return (
                <div className="todo__list" key={todo.id}>
                  <h3 className="todos">{todo.title}</h3>
                  <button
                    className="delete__todo__btn"
                    type="button"
                    onClick={() => this.handleDelete(todo.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="edit__todo__btn"
                    type="button"
                    onClick={() => this.handleEdit(todo.id)}
                  >
                    Edit
                  </button>
                </div>
              );
            })
          ) : (
            <h3 className="no__todos">No more todos, great!</h3>
          )}
        </div>
        <form onSubmit={this.handleSubmit} className="todo__form">
          <input
            className="todo__input"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Write a todo"
          />
          <button
            type="submit"
            className="post__todo__btn"
            onClick={this.handleClick}
          >
            Post
          </button>
        </form>
      </div>
    );
  }
}

export default App;
