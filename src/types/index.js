import {
  BeardShape,
  ClothesShape,
  EarringsShape,
  EarShape,
  EyebrowsShape,
  EyesShape,
  FaceShape,
  Gender,
  GlassesShape,
  MouthShape,
  NoseShape,
  TopsShape,
} from "@/enums";

import { NONE } from "@/utils/constant";

export const None = NONE;

// 构造函数
export function Widget(shape) {
  this.shape = shape || "none";
  this.zIndex = undefined;
  this.fillColor = undefined;
  this.strokeColor = undefined;
}

export const AvatarWidgets = {
  face: new Widget(FaceShape),
  tops: new Widget(TopsShape),
  ear: new Widget(EarShape),
  earrings: new Widget(EarringsShape),
  eyebrows: new Widget(EyebrowsShape),
  glasses: new Widget(GlassesShape),
  eyes: new Widget(EyesShape),
  nose: new Widget(NoseShape),
  mouth: new Widget(MouthShape),
  beard: new Widget(BeardShape),
  clothes: new Widget(ClothesShape),
};

export function AvatarOption() {
  this.gender = undefined;
  this.wrapperShape = undefined;
  this.background = {
    color: "",
  };
  this.widgets = {};
}

export function AvatarSettings() {
  this.gender = [Gender, Gender];
  this.wrapperShape = [];
  this.faceShape = [];
  this.topsShape = [];
  this.earShape = [];
  this.earringsShape = [];
  this.eyebrowsShape = [];
  this.eyesShape = [];
  this.noseShape = [];
  this.mouthShape = [];
  this.beardShape = [];
  this.glassesShape = [];
  this.clothesShape = [];
  this.commonColors = [];
  this.skinColors = [];
  this.backgroundColor = [];
}
