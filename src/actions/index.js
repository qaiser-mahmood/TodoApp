export const login = ()=>{
    return{
        type: 'LOGIN',
    }
}

export const addTodo = (taskToAdd)=>{
    return{
        type: 'ADDTODO',
        payload: taskToAdd
    }
}

export const deleteTodo = (taskToRemoveId)=>{
    return{
        type: 'DELETETODO',
        payload: taskToRemoveId
    }
}

export const completeTodo = (completedTaskId)=>{
    return{
        type: 'COMPLETETODO',
        payload: completedTaskId
    }
}