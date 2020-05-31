import React from 'react';

const TodoListItem = ({ todo }) => (
    <div className = "todo-item-container">
        <h3>{todo.text}</h3>
    </div>
)

export default TodoListItem;