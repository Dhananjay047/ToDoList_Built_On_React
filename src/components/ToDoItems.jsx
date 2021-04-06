import React from "react";

function ToDoItem(props) {
  const [status, change] = React.useState(false);

  function changeState() {
    if (status) {
      change(false);
    } else {
      change(true);
    }
  }

  return (
    <div
      onDoubleClick={() => {
        props.onChecked(props.id);
      }}
      onClick={changeState}
      style={{ textDecoration: status ? "line-through" : "none" }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
