export default (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todosList: [action.payload, ...state.todosList],
      };
    default:
      return state;
  }
};
