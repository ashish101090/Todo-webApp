//add todo item
export const addTodo = (data) => {
  return {
    type: "AddTodo",
    payload: {
      id: new Date().getTime().toString(), //add unique id to the list item
      data: data,
    },
  };
};

// remove specific item
export const deleteTodo = (id) => {
  return {
    type: "DeleteTodo",
    id,
  };
};

// to remove all the todo items
export const removeTodo = () => {
  return {
    type: "RemoveAll",
  };
};
