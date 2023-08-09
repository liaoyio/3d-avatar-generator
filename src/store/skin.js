import { defineStore } from "pinia";

const useSkinStore = defineStore("skin", {
  state: () => ({
    light: "#BC7560",
    mediumLight: "#995641",
    medium: "#915542",
    mediumDark: "#653628",
    dark: "#3E241C",
  }),
});

export default useSkinStore;
