<script setup>
import {
  skin,
  hairColor,
  hair,
  eyeBrow,
  mouth,
  eyeBall,
  eyeLashes,
} from "@/data/superhuman";
import useSuperHumanStore from "@/stores/superhuman";

// const hairObj = import.meta.glob("../assets/super-human/hair/*.png", {
//   as: "url",
// });
// const hairModuleList = Object.values(hairObj);
// const hairSrc = hairModuleList.map((item) => item());
// console.log(await Promise.all(hairSrc));

function getImgSrcListByName(imgPath, imgName) {
  return new URL(`${imgPath}${imgName}.png`, import.meta.url).href;
}

console.log(getImgSrcListByName("../assets/super-human/hair/", "hair1"));

const data = [
  {
    title: "Skin",
    part: "skin",
    colorList: Object.values(skin),
    imgPath: null,
    imgNameList: null,
  },
  {
    title: "Hair",
    part: "hair",
    colorList: Object.values(hairColor),
    imgPath: "../assets/super-human/hair/",
    imgNameList: Object.values(hair),
  },
  {
    title: "EyeBrow",
    part: "eyeBrow",
    colorList: null,
    imgPath: "../assets/super-human/face/eye-brow/",
    imgNameList: Object.values(eyeBrow),
  },
  {
    title: "Mouth",
    part: "mouth",
    colorList: null,
    imgPath: "../assets/super-human/face/mouth/",
    imgNameList: Object.values(mouth),
  },
  {
    title: "EyeBall",
    part: "eyeBall",
    colorList: null,
    imgPath: "../assets/super-human/face/eye-ball/",
    imgNameList: Object.values(eyeBall),
  },
  {
    title: "EyeLashes",
    part: "eyeLashes",
    colorList: null,
    imgPath: "../assets/super-human/face/eye-lashes/",
    imgNameList: Object.values(eyeLashes),
  },
];

const superHumanStore = useSuperHumanStore();

const changeColor = (part, value) => {
  superHumanStore.change(part, "color", value);
};
const changeImg = (part, value) => {
  superHumanStore.change(part, "style", value);
};
</script>

<template>
  <section class="controller-wrapper">
    <div
      class="controller"
      v-for="({ title, part, colorList, imgPath, imgNameList }, index) in data"
      :key="index">
      <h2 class="title">
        <img src="@/assets/icon/variable.svg" />
        {{ title }}
      </h2>
      <ul v-if="colorList" class="color-list">
        <li
          :class="['item', { active: item === superHumanStore[part].color }]"
          v-for="(item, index) in colorList"
          :key="index"
          :style="{ background: item, borderColor: item }"
          @click="changeColor(part, item)"></li>
      </ul>
      <ul v-if="imgNameList" class="img-list">
        <li
          @click="changeImg(part, item)"
          :class="[
            'item',
            { active: item.name === superHumanStore[part].style.name },
          ]"
          v-for="(item, index) in imgNameList"
          :key="index">
          <img
            draggable="false"
            class="img"
            :src="getImgSrcListByName(imgPath, item.name)"
            :alt="item.name" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.controller-wrapper {
  grid-area: 1/2/3/3;
  overflow: auto;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 8px;
  .controller {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-size: 20px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
      padding: 2px 8px;
      background: #f2f2f2;
      border-radius: 8px;
      .icon {
        fill: #7761f9;
      }
    }
    .color-list {
      display: flex;
      gap: 20px;
      .item {
        position: relative;
        cursor: pointer;
        width: 28px;
        height: 28px;
        border-radius: 50%;
      }
      .item.active {
        &::before {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          opacity: 0.5;
          content: "";
          padding: 3px;
          border: 3px solid;
          border-color: inherit;
          border-radius: 50%;
          transition:
            width 0.15s ease 0s,
            height 0.15s ease 0s;
        }
        &::after {
          position: absolute;
          top: 50%;
          left: 50%;
          color: #fff;
          transform: translate(-50%, -50%);
          content: "✔";
          transition: opacity 0.15s ease 0s;
        }
      }
    }
    .img-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      .item {
        cursor: pointer;
        .img {
          vertical-align: middle;
          width: 60px;
          height: 60px;
          padding: 10px;
          object-fit: contain;
          object-position: center center;
        }
      }
      .item.active {
        background: rgba(255, 255, 255, 0.7);
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
      }
    }
  }
}
</style>
