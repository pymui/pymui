import type { LabelTypographyOwnProps } from "../types";
import styled, { CSSObject } from "@emotion/styled";
import { useTheme } from "../theme";
import { useMemo } from "react";

const LabelTypography = styled("span", {
  label: "LabelTypography",
})<Partial<LabelTypographyOwnProps>>(({ size }) => {
  const { theme } = useTheme();
  const _size = useMemo(
    () =>
      new Map<typeof size, CSSObject>([
        [
          "large",
          {
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: theme.pxToRem(14),
            lineHeight: theme.pxToRem(20),
            letterSpacing: theme.pxToRem(0.1),
          },
        ],
        [
          "medium",
          {
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: theme.pxToRem(12),
            lineHeight: theme.pxToRem(16),
            letterSpacing: theme.pxToRem(0.5),
          },
        ],
        [
          "small",
          {
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: theme.pxToRem(11),
            lineHeight: theme.pxToRem(16),
            letterSpacing: theme.pxToRem(0.5),
          },
        ],
      ]),
    [size]
  ).get(size);

  return Object.assign(
    {
      fontFamily: `Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      marginBlockStart: theme.spacing(1),
      marginBlockEnd: theme.spacing(1),
    },
    _size
  );
});

LabelTypography.defaultProps = {
  size: "medium",
};

export default LabelTypography;
