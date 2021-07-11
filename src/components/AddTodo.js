import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

function AddTodo() {
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(addTodo({
            item: todo,
            completed: false,
            id: Math.floor(Math.random() * 1000000 + 1)
        }))
        setTodo('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='todoItem' placeholder='Todo' value={todo} onChange={(e)=>setTodo(e.target.value)} />
                <input type='submit' value='Add Todo' />
            </form>
        </div>
    );
}

export default AddTodo;