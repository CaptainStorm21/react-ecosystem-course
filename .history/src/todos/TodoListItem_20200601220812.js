import React from "react";
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
  <div className="todo-item-container">
    <ol className="todo-align">{todo.text}</ol>
    <div className="button-container">
      {todo.isCompleted
        ? null 
       : <button
          onClick={() => {
            onCompletedPressed(todo.id);
          }}
          className="completed-button"
        >
          Mark As Completed
        </button>
      }

      <button
        onClick={() => onRemovePressed(todo.text)}
        className="remove-button"
      >
        Remove
      </button>
    </div>
  </div>
);


export default TodoListItem;
