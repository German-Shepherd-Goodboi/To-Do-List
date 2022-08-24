import create from "zustand";

const useJokeStore = create((set) => ({
  catFact: "",
  fetch: async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    const randomCatFact = data.fact;
    set({ catFact: randomCatFact });
  },
}));

export default useJokeStore;
