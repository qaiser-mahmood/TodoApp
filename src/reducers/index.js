import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { todoReducer } from "./todoReducer";

export const allReducers = combineReducers({
    isLogedIn: loginReducer,
    todos: todoReducer
})