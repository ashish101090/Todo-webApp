import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../action";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="main_div">
        <header>Todo App</header>
        <div className="addtodo">
          <input
            type="text"
            placeholder="Add your new todo"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <button
            onClick={() => {
              inputData !== "" &&
                dispatch(addTodo(inputData), setInputData(""));
            }}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <ul className="listItem">
          {list.map((elem) => {
            return (
              <li key={elem.id}>
                {elem.data}
                <span>
                  <i
                    className="fas fa-trash icon"
                    onClick={() => dispatch(deleteTodo(elem.id))}
                  ></i>
                </span>
              </li>
            );
          })}
        </ul>
        <div className="footer">
          <span>You have {list.length} pending tasks</span>
          <button onClick={() => dispatch(removeTodo())}>Clear All</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
