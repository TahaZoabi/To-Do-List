// Global State
import AppReducer from "./AppReducer.js";
import { createContext, useReducer } from "react";
// Initial State
const initialState = {
  todosList: [],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function addTodo(text) {
    dispatch({
      type: "ADD_TODO",
      payload: text,
    });
  }

  function deleteTodo(index) {
    dispatch({
      type: "DELETE_TODO",
      payload: index,
    });
  }

  function editTodo(text, index) {
    dispatch({
      type: "EDIT_TODO",
      index,
      payload: text,
    });
  }

  // Value
  const contextValue = {
    todosList: state.todosList,
    addTodo,
    deleteTodo,
    editTodo,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
