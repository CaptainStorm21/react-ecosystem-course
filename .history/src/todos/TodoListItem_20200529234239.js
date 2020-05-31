import React from "react";

const TodoListItem = ({ todo }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="">
      <button className=""> Mark as Completed</button>
      <button className=""> Remove</button>
    </div>
  </div>
);

export default TodoListItem;
