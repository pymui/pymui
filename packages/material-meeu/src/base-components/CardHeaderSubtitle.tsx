import styled from "@emotion/styled";
import { useTheme } from "../theme";

const CardHeaderSubtitle = styled("div", {
  label: "CardHeaderSubtitle",
})(() => {
  const { theme } = useTheme();
  return {
    // Grid item properties
    alignSelf: "start",
    gridRowStart: "2",
    // typography
    fontFamily: `Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: theme.pxToRem(14),
    lineHeight: theme.pxToRem(20),
    letterSpacing: theme.pxToRem(0.25),
  };
});

export default CardHeaderSubtitle;
