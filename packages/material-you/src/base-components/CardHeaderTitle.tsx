import styled from "@emotion/styled";
import { useTheme } from "../theme";

const CardHeaderTitle = styled("div", {
  label: "CardHeaderTitle",
})(() => {
  const { theme } = useTheme();
  return {
    alignSelf: "end",
    gridRowStart: "1",
    gridRowEnd: "2",
    // typography
    fontFamily: `Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    marginBlockStart: theme.spacing(1),
    marginBlockEnd: theme.spacing(1),
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: theme.pxToRem(16),
    lineHeight: theme.pxToRem(24),
    letterSpacing: theme.pxToRem(0.1),
  };
});

export default CardHeaderTitle;
