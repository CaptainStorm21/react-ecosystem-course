import React from 'react';

const TodoListItem = ({ todo }) => (
    <div className = "todo-item-container">
        <h3>{todo.text}</h3>
        <button></button>
    </div>
)

export default TodoListItem;