import "./App.css";
import { Fragment } from "react";
import Input from "./components/Input";
import Tasks from "./components/Tasks";
import CompletedTasks from "./components/CompletedTasks";
import FetchJoke from "./components/FetchJoke";

const App = () => {
  return (
    <Fragment>
      <Input />
      <Tasks />
      <CompletedTasks />
      <FetchJoke />
    </Fragment>
  );
};

export default App;
