import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import TodoList from "./Redux/components/TodoList";
import todoReducer from "./Redux/reducers/todoReducer";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}
