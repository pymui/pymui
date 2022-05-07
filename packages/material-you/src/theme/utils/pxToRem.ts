type PxToRem = (pixels: number) => string;

const pxToRem: PxToRem = (px) => {
  let rem = px / 16;
  return `${rem}rem`;
};

export default pxToRem;
