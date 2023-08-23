import { defineStore } from "pinia";
import { skin, color, hairColor, hair, face } from "@/data/superhuman";

const useSuperHumanStore = defineStore("superHuman", {
  state: () => ({
    skin: skin.light,
    color: color.red,
    hair: {
      style: hair.hair5,
      color: hairColor.brownHair,
    },
    face: {
      eyeBrow: {
        style: face.eyeBrow.eyebrow2,
        color: "#995641",
      },
      mouth: {
        style: face.mouth.mouth2,
        color: "#995641",
      },
      eyeBall: {
        style: face.eyeBall.brown,
      },
      eyeLashes: {
        style: face.eyeLashes.eyelashes1,
        color: "#995641",
      },
    },
  }),
});

export default useSuperHumanStore;
