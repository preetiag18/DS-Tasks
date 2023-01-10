import { useState } from "react";
import React from "react";
import classes from "./Stack.module.css";

const Stack = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const [items, setItems] = useState([2, 4]);

  const onAdd = () => {
    let getRandomNumber = getRandomInt(50);
    setItems([...items, getRandomNumber]);
  };

  const onRemove = () => {
    let y = items.slice(0, -1);
    setItems(y);
  };

  return (
    <>
      <h1>Stack</h1>
      <div className={classes.app}>
        <div className={classes.items}>
          <div className={classes.itemText}>Rear of the stack</div>
          {items.map((item) => (
            <div className={classes.item} key={item}>
              {item}
            </div>
          ))}
          <div className={classes.itemText}>Front of the stack</div>
        </div>
        <div className={classes.button_container}>
          <button className={classes.btn} onClick={onAdd}>
            Add
          </button>
          <button className={classes.btn} onClick={onRemove}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default Stack;
