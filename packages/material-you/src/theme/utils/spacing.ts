type Spacing = (space: number) => string;

const spacing: Spacing = (space) => {
  let _space = space * 0.5;
  return `${_space}rem`;
};

export default spacing;
