import React from 'react';

const TodoListItem = ({ todo }) => (
  <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div></div>
    <button> Mark as Completed</button>
    <button> Remove</button>
  </div>
);

export default TodoListItem;