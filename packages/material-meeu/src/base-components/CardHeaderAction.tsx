import styled from "@emotion/styled";

const CardHeaderAction = styled("div", {
  label: "CardHeaderAction",
})(() => {
  return {
    // Grid item properties
    display: "grid",
    placeItems: "center",

    height: "48px",
    width: "48px",
    gridColumnStart: "3",
    gridColumnEnd: "4",
    gridRowStart: "1",
    gridRowEnd: "3",
  };
});

export default CardHeaderAction;
