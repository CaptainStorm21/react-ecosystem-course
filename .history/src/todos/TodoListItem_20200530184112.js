import React from "react";

const TodoListItem = ({ todo }) => (
  <div className="todo-item-container">
    <p>{todo.text}</h4>
    <div className="button -container">
      <button className="completed-button"> Mark as Completed</button>
      <button className="remove-button"> Remove</button>
    </div>
  </div>
);

export default TodoListItem;
