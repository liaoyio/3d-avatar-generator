const skin = {
  light: "#BC7560",
  mediumLight: "#995641",
  medium: "#915542",
  mediumDark: "#653628",
  dark: "#3E241C",
};
const hairColor = {
  whiteHair: "#909599",
  blondHair: "#967F69",
  brownHair: "#4B382E",
  redHair: "#9B5F45",
};
const color = {
  red: "#AB5050",
  yellow: "#AD9749",
  green: "#424E39",
  blue: "#437794",
  black: "#000000",
  white: "#DCDCDC",
};

const hair = {
  hair1: {
    name: "hair1",
    w: "481px",
    h: "434px",
    x: "-26px",
    y: "10px",
    src: new URL("../assets/super-human/hair/hair1.png", import.meta.url).href,
  },
  hair2: {
    name: "hair2",
    w: "417px",
    h: "365px",
    x: "17px",
    y: "52px",
    src: new URL("../assets/super-human/hair/hair2.png", import.meta.url).href,
  },
  hair3: {
    name: "hair3",
    w: "503px",
    h: "379px",
    x: "-35px",
    y: "90px",
    src: new URL("../assets/super-human/hair/hair3.png", import.meta.url).href,
  },
  hair4: {
    name: "hair4",
    w: "289px",
    h: "185px",
    x: "90px",
    y: "94px",
    src: new URL("../assets/super-human/hair/hair4.png", import.meta.url).href,
  },
  hair5: {
    name: "hair5",
    w: "338.95px",
    h: "274.69px",
    x: "43.45px",
    y: "-13.66px",
    src: new URL("../assets/super-human/hair/hair5.png", import.meta.url).href,
  },
};

const eyeBrow = {
  eyebrow1: {
    name: "eyebrow1",
    w: "179px",
    h: "27px",
    x: "0px",
    y: "0px",
    src: new URL(
      "../assets/super-human/face/eye-brow/eyebrow1.png",
      import.meta.url
    ).href,
  },
  eyebrow2: {
    name: "eyebrow2",
    w: "179px",
    h: "27px",
    x: "0px",
    y: "0px",
    src: new URL(
      "../assets/super-human/face/eye-brow/eyebrow2.png",
      import.meta.url
    ).href,
  },
  eyebrow3: {
    name: "eyebrow3",
    w: "179px",
    h: "27px",
    x: "0px",
    y: "0px",
    src: new URL(
      "../assets/super-human/face/eye-brow/eyebrow3.png",
      import.meta.url
    ).href,
  },
  eyebrow4: {
    name: "eyebrow4",
    w: "179px",
    h: "27px",
    x: "0px",
    y: "0px",
    src: new URL(
      "../assets/super-human/face/eye-brow/eyebrow4.png",
      import.meta.url
    ).href,
  },
  eyebrow5: {
    name: "eyebrow5",
    w: "179px",
    h: "27px",
    x: "0px",
    y: "0px",
    src: new URL(
      "../assets/super-human/face/eye-brow/eyebrow5.png",
      import.meta.url
    ).href,
  },
  eyebrow6: {
    name: "eyebrow6",
    w: "179px",
    h: "27px",
    x: "0px",
    y: "0px",
    src: new URL(
      "../assets/super-human/face/eye-brow/eyebrow6.png",
      import.meta.url
    ).href,
  },
  eyebrow7: {
    name: "eyebrow7",
    w: "179px",
    h: "27px",
    x: "0px",
    y: "0px",
    src: new URL(
      "../assets/super-human/face/eye-brow/eyebrow7.png",
      import.meta.url
    ).href,
  },
  eyebrow8: {
    name: "eyebrow8",
    w: "179px",
    h: "27px",
    x: "0px",
    y: "0px",
    src: new URL(
      "../assets/super-human/face/eye-brow/eyebrow8.png",
      import.meta.url
    ).href,
  },
  eyebrow9: {
    name: "eyebrow9",
    w: "179px",
    h: "27px",
    x: "0px",
    y: "0px",
    src: new URL(
      "../assets/super-human/face/eye-brow/eyebrow9.png",
      import.meta.url
    ).href,
  },
  eyebrow10: {
    name: "eyebrow10",
    w: "179px",
    h: "27px",
    x: "0px",
    y: "0px",
    src: new URL(
      "../assets/super-human/face/eye-brow/eyebrow10.png",
      import.meta.url
    ).href,
  },
};
const mouth = {
  mouth1: {
    name: "mouth1",
    w: "41px",
    h: "28px",
    x: "0px",
    y: "0px",
    src: new URL("../assets/super-human/face/mouth/mouth1.png", import.meta.url)
      .href,
  },
  mouth2: {
    name: "mouth2",
    w: "54px",
    h: "16px",
    x: "23px",
    y: "17px",
    src: new URL("../assets/super-human/face/mouth/mouth2.png", import.meta.url)
      .href,
  },
};
const eyeBall = {
  brown: {
    name: "brown",
    w: "161px",
    h: "46px",
    x: "0px",
    y: "0px",
    src: new URL(
      "../assets/super-human/face/eye-ball/brown.png",
      import.meta.url
    ).href,
  },
  green: {
    name: "green",
    w: "161px",
    h: "46px",
    x: "0px",
    y: "0px",
    src: new URL(
      "../assets/super-human/face/eye-ball/green.png",
      import.meta.url
    ).href,
  },
  grey: {
    name: "grey",
    w: "161px",
    h: "46px",
    x: "0px",
    y: "0px",
    src: new URL(
      "../assets/super-human/face/eye-ball/grey.png",
      import.meta.url
    ).href,
  },
  hazel: {
    name: "hazel",
    w: "161px",
    h: "46px",
    x: "0px",
    y: "0px",
    src: new URL(
      "../assets/super-human/face/eye-ball/hazel.png",
      import.meta.url
    ).href,
  },
};
const eyeLashes = {
  eyelashes1: {
    name: "eyelashes1",
    w: "188px",
    h: "33px",
    x: "0px",
    y: "0px",
    src: new URL(
      "../assets/super-human/face/eye-lashes/eyelashes1.png",
      import.meta.url
    ).href,
  },
  eyelashes2: {
    name: "eyelashes2",
    w: "188px",
    h: "33px",
    x: "0px",
    y: "0px",
    src: new URL(
      "../assets/super-human/face/eye-lashes/eyelashes2.png",
      import.meta.url
    ).href,
  },
  eyelashes3: {
    name: "eyelashes3",
    w: "188px",
    h: "33px",
    x: "0px",
    y: "0px",
    src: new URL(
      "../assets/super-human/face/eye-lashes/eyelashes3.png",
      import.meta.url
    ).href,
  },
};

export { skin, color, hairColor, hair, eyeBrow, mouth, eyeBall, eyeLashes };
