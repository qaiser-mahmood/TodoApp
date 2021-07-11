export const todoReducer = (
  state = [{ item: "", completed: false, id: 0 }],
  action
) => {
  switch (action.type) {
    case "ADDTODO":
      return [...state, action.payload]
    case "DELETETODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "COMPLETETODO":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { item: todo.item, completed: !todo.completed, id: todo.id };
        }
        return todo;
      });
    default:
      return state;
  }
};
