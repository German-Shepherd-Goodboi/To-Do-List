import useJokeStore from "../store/jokestore";
import classes from "./FetchJoke.module.css";

const FetchJoke = () => {
  const catFact = useJokeStore((state) => state.catFact);
  const fetch = useJokeStore((state) => state.fetch);

  return (
    <div>
      <button onClick={() => fetch()}>It's time for a cat fact!</button>
      <div className={classes.catFact}>{catFact}</div>
    </div>
  );
};

export default FetchJoke;
