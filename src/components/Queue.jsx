import { useState } from "react";
import classes from "./Queue.module.css";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Queue() {
  const [items, setItems] = useState([2, 5]);
  const onEnqueue = () => {
    let getRandomNumber = getRandomInt(50);
    setItems([...items, getRandomNumber]);
  };

  const onDequeue = () => {
    let y = items.slice(1);
    setItems(y);
  };
  return (
    <>
      <h1>Queue</h1>
      <div className={classes.app}>
        <div className={classes.items}>
          <div className={classes.itemText}>Front of the queue</div>
          {items.map((item) => (
            <div className={classes.item} key={item}>
              {item}
            </div>
          ))}
          <div className={classes.itemText}>Rear of the Queue</div>
        </div>
        <div className={classes.button_container}>
          <button className={classes.btn} onClick={onEnqueue}>
            Enqueue
          </button>
          <button className={classes.btn} onClick={onDequeue}>
            Dequeue
          </button>
        </div>
      </div>
    </>
  );
}

export default Queue;
