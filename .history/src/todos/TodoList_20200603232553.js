import React from 'react';
import { connect } from "react-redux";
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import {
    removeTodo,
    markTodoAsCompleted
} from '../redux/actions';
//thunk
import { displayAlert } from '../thunk/thunk';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => {
  const loadingMessage = <div>loading todos....</div>
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map(todo) =>  <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />)}
    </div>
  );
};

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
  onDisplayAlertClicked: text => dispatch(displayAlert(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);