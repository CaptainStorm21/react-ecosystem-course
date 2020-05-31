import React from "react";
import './TodoListItem.css';

const TodoListItem = ({ todo }) => (
  <div className="todo-item-container">
    <il className = "todo-align">{todo.text}</l>
    <div className="button -container">
      <button className="completed-button"> Mark as Completed</button>
      <button className="remove-button"> Remove</button>
    </div>
  </div>
);

export default TodoListItem;
