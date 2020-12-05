import React from "react";

const TodoInput = ({ value, handleChange, handleClick, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="todo__form">
      <input
        className="todo__input"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Write a todo"
      />
      <button type="submit" className="post__todo__btn" onClick={handleClick}>
        Post
      </button>
    </form>
  );
};

export default TodoInput;
