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
import getRandomPropertyWithoutRepeat from "@/utils/getRandomPropertyWithoutRepeat";

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
    random() {
      this.$patch((state) => {
        state.skin = {
          color: getRandomPropertyWithoutRepeat(skin),
        };
        state.hair = {
          style: getRandomPropertyWithoutRepeat(hair),
          color: getRandomPropertyWithoutRepeat(hairColor),
        };
        state.eyeBrow = {
          style: getRandomPropertyWithoutRepeat(eyeBrow),
          color: "#995641",
        };
        state.mouth = {
          style: getRandomPropertyWithoutRepeat(mouth),
          color: "#995641",
        };
        state.eyeBall = {
          style: getRandomPropertyWithoutRepeat(eyeBall),
        };
        state.eyeLashes = {
          style: getRandomPropertyWithoutRepeat(eyeLashes),
          color: "#995641",
        };
      });
    },
  },
});

export default useSuperHumanStore;
