let lastRandomKey;
export default function getRandomPropertyWithoutRepeat(obj) {
  const keys = Object.keys(obj);

  // 如果对象为空或只有一个属性，直接返回该属性值
  if (keys.length === 0) {
    return undefined;
  }
  if (keys.length === 1) {
    return obj[keys[0]];
  }

  let randomKey;
  do {
    randomKey = keys[Math.floor(Math.random() * keys.length)];
  } while (randomKey === lastRandomKey);

  lastRandomKey = randomKey;
  return obj[randomKey];
}
