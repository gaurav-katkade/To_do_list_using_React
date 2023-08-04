import React, { useState } from "react";

function ToDoListItem(props) {
  const [isDone, setIsDone] = useState(false);
  function handleClick() {
    console.log("clicked");
    setIsDone((prevState) => {
      return !prevState;
    });
  }
  return (
    <div
      onClick={handleClick}
      style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      <li>{props.text}</li>
    </div>
  );
}
export default ToDoListItem;
