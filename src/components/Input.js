import { useRef } from "react";
import useTaskStore from "../store/store";
import classes from "./Input.module.css";

const Input = () => {
  const inputRef = useRef();
  const addTask = useTaskStore((state) => state.addTask);

  const addNewTask = () => {
    if (inputRef.current.value.length === 0) {
      return;
    }
    addTask(inputRef.current.value);
    console.log(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div>
      <input ref={inputRef} className={classes.input}></input>
      <button
        onClick={addNewTask}
        type="submit"
        className={classes["add-button"]}
      >
        Add Task
      </button>
    </div>
  );
};
export default Input;
