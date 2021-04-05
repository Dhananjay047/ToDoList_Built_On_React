import React, { useState } from "react";
import Ul from "./Ul";

function App() {
  const [items, changeItem] = useState("");
  const [itemsArr, addNewItem] = useState([]);

  function handleItem(event) {
    changeItem(event.target.value);
  }

  function addItem() {
    addNewItem((prevValue) => [...prevValue, items]);
    changeItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleItem} type="text" value={items} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemsArr.map((toDo) => (
            <li>{toDo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
