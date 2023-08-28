import { defineStore } from "pinia";
import {
  skin,
  color,
  hairColor,
  hair,
  eyeBrow,
  mouth,
  eyeBall,
  eyeLashes,
} from "@/data/superhuman";

const useSuperHumanStore = defineStore("superHuman", {
  state: () => ({
    skin: {
      color: skin.dark,
    },
    color: color.red,
    hair: {
      style: hair.hair5,
      color: hairColor.brownHair,
    },
    eyeBrow: {
      style: eyeBrow.eyebrow2,
      color: "#995641",
    },
    mouth: {
      style: mouth.mouth2,
      color: "#995641",
    },
    eyeBall: {
      style: eyeBall.brown,
    },
    eyeLashes: {
      style: eyeLashes.eyelashes1,
      color: "#995641",
    },
  }),
  actions: {
    reset() {
      this.$reset();
    },
    change(part, type, value) {
      this[part][type] = value;
    },
  },
});

export default useSuperHumanStore;
