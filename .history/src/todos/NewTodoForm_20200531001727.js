import React, { useState } from 'react';
import './NewTodoForm.css';
import { connect } from 'react-redux';

const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState(' ');
   return (
        <div className="new-todo-form">
           <input className="new-todo-input"
               type="text"
               value={inputValue}
               onChange = { e => setInputValue (e.target.value)}
           />
            <button className="newTodo">Create a New Todo</button>
        </div>
    );
};

const map
export default  connect()(NewTodoForm);