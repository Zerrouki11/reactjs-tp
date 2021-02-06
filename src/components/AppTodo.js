import React, { Component } from 'react';
import AddTodo from './tp5/AddTodo';
import Filter from './tp5/Filter';
import TodoList from './tp5/TodoList';
import 'bootstrap/dist/css/bootstrap.css';

class AppTodo extends Component {
  render() {
    return (
      <div className="container p-5" >
        <h4>Ajouter une todo</h4>
        <hr className="my-4"/>
        <AddTodo/>
        <hr className="my-4"/>
        <div className="card">
          <div className="card-header d-flex flex-row align-items-center">
            <span className="flex-fill">Todo list</span>
            <Filter/>
          </div>
          <div className="card-body">
            <TodoList/>
          </div>       
        </div>
      </div>
    )
  }
}

export default AppTodo;
