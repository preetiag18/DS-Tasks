import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import classnames from "classnames";

import classes from "./Bubblesort.module.css";

const bubblesort = (arrayToSort) => {
  const arr = [...arrayToSort];
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let isArraySortedAlready = false;

    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isArraySortedAlready = true;
      }
    }

    // If array is sorted already, then break. No need to sort further

    if (!isArraySortedAlready) {
      break;
    }
  }

  return arr;
};

const Bubblesort = () => {
  const defaultInputArray = "88,54,-6,9,0,234";
  const [output, setOutput] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      numbers: defaultInputArray,
    },
  });

  useEffect(() => {
    const userInputArray = defaultInputArray
      .split(",")
      .map((item) => parseFloat(item));
    const sortedArray = bubblesort(userInputArray);
    setOutput(sortedArray);
  }, []);

  const onSubmit = (e) => {
    const userInput = e.numbers;
    const userInputArray = userInput.split(",").map((item) => parseFloat(item));
    const sortedArray = bubblesort(userInputArray);
    setOutput(sortedArray);
  };

  return (
    <>
      <h1>Bubble sort</h1>
      <div className={classes.container}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="numbers" className={classes.form_label}>
            {" "}
            Enter the numbers to sort (seperated by comma){" "}
          </label>
          <input
            type="text"
            name="numbers"
            id="numbers"
            placeholder="Enter the number"
            className={classnames(
              classes.form_input,
              errors.numbers && errors.numbers.type === "required"
                ? classes.form_error
                : ""
            )}
            {...register("numbers", {
              required: true,
              pattern: {
                value: /^[0-9,-.]*$/i,
                message: "Enter only comma seperated numbers",
              },
            })}
          />
          {errors.numbers && errors.numbers.message && (
            <div>{errors.numbers.message}</div>
          )}
          <button type="submit" className={classes.btn}>
            Click to sort
          </button>
        </form>
        {output.length ? <p>Sorted array is {output.join(",")}</p> : ""}
      </div>
    </>
  );
};

export default Bubblesort;
