import React, { useState } from "react";
import ToDoListItem from "./ToDoListItem";
function App() {
  const [item, setItem] = useState("");
  const [items, setItemList] = useState([]);
  //  let items =[];
  // if we try to make array this way  it won't work it get re-render everytime we need to use hooks to implement this
  function handleOnChange(event) {
    const { value } = event.target;
    console.log("value " + value);
    setItem(value);
  }
  function handleSubmit() {
    console.log("Add btn clicked ");
    item != "" && setItemList([...items, item]);
    setItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleOnChange} name="item" type="text" value={item} />
        <button onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <ToDoListItem text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
