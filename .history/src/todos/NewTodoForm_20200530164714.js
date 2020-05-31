import React, { useState } from 'react';
import './NewTodoForm.css';

const NewTodoForm = () => {
    (
        <div className="new-todo-form">
            <input className="new-todo-input" type="text" />
            <button className="newTodo">CreateTodo</button>
        </div>
    );
};
export default NewTodoForm;