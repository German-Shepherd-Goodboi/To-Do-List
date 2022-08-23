import useTaskStore from "../store/store";

const CompletedTasks = () => {
  const completedTasks = useTaskStore((state) => state.completedTasks);
  return (
    <div>
      <h4>Completed tasks: ({completedTasks.length})</h4>
      <div>
        {completedTasks.map((completedTask) => (
          <div key={completedTask.key}>{completedTask.name}</div>
        ))}
      </div>
    </div>
  );
};

export default CompletedTasks;
