import React from "react";
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed}) => (
  <div className="todo-item-container">
    <ol className="todo-align">{todo.text}</ol>
    <div className="button-container">
      {todo.isCompleted ? null :
      <button className="completed-button"
        onClick = { () => onCompletedPressed(todo.text)}
      > Mark as Completed</button>
      <button
            onClick = { () => onRemovePressed (todo.text) }
            className="remove-button"> Remove</button>
    </div>
          };
  </div>
);


export default TodoListItem;
