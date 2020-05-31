import React from 'react';
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem';
import './TodoList.css'
import T
const TodoList = ({ todos }) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
)

export default TodoList;