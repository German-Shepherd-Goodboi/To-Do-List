import useTaskStore from "../store/store";
import classes from "./Tasks.module.css";

const Tasks = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const addCompletedTask = useTaskStore((state) => state.addCompletedTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  let content = <h1>You have {tasks.length} tasks</h1>

  if (tasks.length === 1) {
    content = <h1>You have {tasks.length} task</h1>
  }

  return (
    <div className={classes.container}>
      <ul>
        {tasks.map((task) => (
          <div key={task.key} className={classes["list-div"]}>
            <li>{task.name}</li>
            <button
              onClick={() => deleteTask(task.key)}
              className={classes.button}
            >
              x
            </button>
            <button onClick={() => addCompletedTask(task)} className={classes.button}>v</button>
            <hr />
          </div>
        ))}
      </ul>

    {content}
    </div>
  );
};

export default Tasks;
