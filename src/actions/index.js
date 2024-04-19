// actions.js

export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
      completed: false // Set initial completion status to false
    }
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id
  };
};

export const removeTodo = () => {
  return {
    type: "REMOVE_ALL"
  };
};

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};

