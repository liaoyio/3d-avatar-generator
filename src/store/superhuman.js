import { defineStore } from "pinia";

const useSuperHumanStore = defineStore("superhuman", {
  state: () => ({
    top: {
      type: "",
      pose: "",
      color: "",
      skin: "",
    },
    pants: {
      type: "",
      belt: true,
      pose: "",
      color: "",
    },
    shoes: {
      type: "",
      pose: "",
      color: "",
    },
    legs: {
      property: "",
      pose: "",
      socksColor: "",
      skin: "",
    },
    hair: {
      style: "",
      hairColor: "",
      hatColor: "",
    },
  }),
});

export default useSuperHumanStore;
