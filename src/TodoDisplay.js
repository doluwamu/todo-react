import React from "react";

const TodoDisplay = ({ todos, handleEdit, handleDelete }) => {
  return (
    <>
      {todos && todos.length !== 0 ? (
        todos.map((todo) => {
          return (
            <div className="todo__list" key={todo.id}>
              <h3 className="todos">{todo.title}</h3>
              <button
                className="delete__todo__btn"
                type="button"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
              <button
                className="edit__todo__btn"
                type="button"
                onClick={() => handleEdit(todo.id)}
              >
                Edit
              </button>
            </div>
          );
        })
      ) : (
        <h3 className="no__todos">No todos, great!</h3>
      )}
    </>
  );
};

export default TodoDisplay;
