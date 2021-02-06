import React from 'react';

const TodoItem = ({todo, toggleTodo, deleteTodo}) => {
    return (
        <li onClick={ toggleTodo } className="list-group-item d-flex flex-row justify-content-between align-items-center list-group-item-action ">
        <span>{ todo.name }</span>
            <span>
                <input type="checkbox" checked={ todo.done } onChange={ () => {} } className="mx-3"/>
                <button onClick={ (e) => {
                    e.stopPropagation();
                    deleteTodo()
                } } className="btn btn-sm btn-danger">delete</button>
            </span>
        </li>
    )
}

export default TodoItem;