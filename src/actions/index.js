// actions.js

// Action creator to add a new todo item
export const addTodo = (data) => {
  return {
    type: "ADD_TODO", // Action type to add todo
    payload: {
      id: new Date().getTime().toString(), // Generate unique id using current timestamp
      data: data, // Text of the todo item
      completed: false // Set initial completion status to false
    }
  };
};

// Action creator to delete a todo item
export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO", // Action type to delete todo
    id // Id of the todo item to be deleted
  };
};

// Action creator to remove all todo items
export const removeTodo = () => {
  return {
    type: "REMOVE_ALL" // Action type to remove all todos
  };
};


