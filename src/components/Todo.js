import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { completeTodo } from '../actions';
import { deleteTodo } from '../actions/index';

function Todo({id}) {
    const todo = useSelector(state=>state.todos.filter(item=>item.id === id))[0]
    const dispatchCompleted = useDispatch()
    const dispatchDelete = useDispatch()

    return (
        <div className={todo.completed ? 'completedTodo' : 'todo'}>
            <input type='checkbox' checked={todo.completed} onChange={()=>dispatchCompleted(completeTodo(id))} />
            <h4>{todo.item}</h4>
            <button onClick={()=>dispatchDelete(deleteTodo(id))}>Delete</button>
        </div>
    );
}

export default Todo;