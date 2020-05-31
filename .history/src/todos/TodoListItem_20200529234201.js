import React from 'react';

const TodoListItem = ({ todo }) => (
  <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <dv
    <button> Mark as Completed</button>
    <button> Remove</button>
  </div>
);

export default TodoListItem;