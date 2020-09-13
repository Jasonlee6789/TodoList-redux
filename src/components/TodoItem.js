import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";

function TodoItem({ todo }) {
  let dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  return (
    <div>
      <span></span>
      <div className="row mx-2 align-items-center">
        <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
        <div className="col">
          {editable ? (
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <h4>{todo.name}</h4>
          )}
        </div>
        <button
          onClick={() => {
            dispatch(
              updateTodo({
                ...todo,
                name: name,
              })
            );
            if (editable) {
              setName(name);
            }
            setEditable(!editable);
          }}
          className="btn btn-primary m-2"
        >
          {editable ? "Update" : "Edit"}
        </button>

        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
