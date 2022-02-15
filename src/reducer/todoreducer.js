const initialData = {
  list: [], // initially list should be empty array
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "AddTodo":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DeleteTodo":
      const newList = state.list.filter((elem) => elem.id !== action.id);

      return {
        ...state,
        list: newList,
      };

    case "RemoveAll":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default todoReducers;
