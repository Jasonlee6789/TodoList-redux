import React from "react";

function TodoInput() {
  return (
    <div>
      <h3>TodoList-redux-demo (Jing Li)</h3>
      <div className="row m-2">
        <input type="text" className="col form-control" />
        <button className="col btn btn-primary mx-2">Add</button>
      </div>
    </div>
  );
}

export default TodoInput;
