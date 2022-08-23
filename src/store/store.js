import create from "zustand";

const useTaskStore = create((set) => ({
  tasks: [],
  completedTasks: [],
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, { name: task, key: Math.random().toString() }],
    })),
  addCompletedTask: (completedTask) =>
    set((state) => ({
      completedTasks: [...new Set([...state.completedTasks, completedTask])],
    })),
  deleteTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.key !== taskId),
    })),
}));
export default useTaskStore;
