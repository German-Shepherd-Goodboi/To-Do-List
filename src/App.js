import "./App.css";
import { Fragment } from "react";
import Input from "./components/Input";
import Tasks from "./components/Tasks";
import CompletedTasks from "./components/CompletedTasks";
const App = () => {
  return (
    <Fragment>
      <Input />
      <Tasks />
      <CompletedTasks />
    </Fragment>
  );
};

export default App;
