import React, { useState } from 'react';
import './NewTodoForm.css';
import { connect } from 'react-redux';
//for dispatch
import { createTodo }

const NewTodoForm = ({ todos }) => {
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

const mapStateToProps = state => ({
    todos: state.todos,
});
const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);