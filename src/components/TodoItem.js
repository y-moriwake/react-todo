import React from 'react'
import './TodoItem.css';

const TodoItem = (props,key) => {
    return (
        <div>
            <div className="todo-item" key={props.todo.id}>
                <div className="todo-item-title">{props.todo.title}</div>
                <div className="todo-item-description">{props.todo.description}</div>
            </div>
        </div>
    )
}

export default TodoItem
