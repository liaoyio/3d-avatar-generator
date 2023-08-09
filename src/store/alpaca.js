import { defineStore } from "pinia";
import variants from "@/utils/variants.js";

const useAlpacaStore = defineStore("alpaca", {
  state: () => ({
    hair: "default",
    ears: "default",
    eyes: "default",
    mouth: "default",
    neck: "default",
    leg: "default",
    accesories: null,
    background: "darkblue70",
  }),
  actions: {
    // 随机操作
    random() {
      Object.keys(variants).forEach((part) => {
        this[part] =
          variants[part][Math.floor(Math.random() * variants[part].length)];
      });
    },

    // 更改操作
    change(type, value) {
      this.$patch(() => {
        this[type] = value;
      });
    },
  },
});

export default useAlpacaStore;
