export default (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todosList: [action.payload, ...state.todosList],
      };

    case "DELETE_TODO": {
      const newTodosList = [...state.todosList];
      newTodosList.splice(action.payload, 1);
      return {
        ...state,
        todosList: newTodosList,
      };
    }
    default:
      return state;
  }
};
