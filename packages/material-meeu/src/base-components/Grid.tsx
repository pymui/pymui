import styled from "@emotion/styled";

const Grid = styled("div", {
  label: "grid",
})(() => ({
  display: "grid",
  gridTemplateColumns: `repeat(12, minmax(0, 1fr))`,
}));

export default Grid;
