import React from 'react';
import Todo from './Todo';
import { useSelector } from 'react-redux';

function TodoList() {
    const todos = useSelector(state=>state.todos)
    return (
        <div>
            {todos.map(todo=>(
                <Todo id={todo.id} key={todo.id}/>
            ))}
        </div>
    );
}

export default TodoList;