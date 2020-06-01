import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';

import { connect } from 'react-redux';


const TodoList = ({ todos = [{ text: "Welcome from a note" }] }) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
)

export default connect()(TodoList;)