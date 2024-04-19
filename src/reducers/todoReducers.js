const initialData = {
  list: [] // Initial state with an empty list of todo items
};

// Reducer function for managing todo state
const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload; // Destructure id and data from action payload
      // Add a new todo item to the list
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          }
        ]
      };
    case "DELETE_TODO":
      // Remove a todo item from the list based on its id
      const updatedList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: updatedList,
      };
    case "REMOVE_ALL":
      // Remove all todo items from the list
      return {
        ...state,
        list: []
      };
    default:
      return state; // Return the current state if action type doesn't match
  }
};

export default todoReducers; // Export the todoReducers function as the default export
