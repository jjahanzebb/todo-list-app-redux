export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: {
      todo,
    },
  };
}

export function removeTodo(todo) {
  return {
    type: REMOVE_TODO,
    payload: {
      todo,
    },
  };
}
