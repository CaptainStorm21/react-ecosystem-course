import React, { useEffect }  from 'react';
import { connect } from "react-redux";
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { loadTodos } from '../thunk/thunk';  
import './TodoList.css';
import {
    removeTodo,
    markTodoAsCompleted
} from '../redux/actions';
//thunk
import { displayAlert } from '../thunk/thunk';

const TodoList = ({ todos = [], onRemovePressed, isLoading, onCompletedPressed, start }) => {
  useEffect(() => {
    startLoadingTools();
  })
  const loadingMessage = <div>loading todos....</div>
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map(todo =>  <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />)}
    </div>
  );
  return isLoading ? loadingMessage : content;
};


const mapStateToProps = state => ({
  isLoading: state.isLoading,
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
  onDisplayAlertClicked: text => dispatch(displayAlert(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);