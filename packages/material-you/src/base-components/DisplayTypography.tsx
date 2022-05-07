import type { DisplayTypographyOwnProps } from "../types";
import styled, { CSSObject } from "@emotion/styled";
import { useTheme } from "../theme";
import { useMemo } from "react";

const DisplayTypography = styled("h2", {
  label: "DisplayTypography",
})<Partial<DisplayTypographyOwnProps>>(({ variant, size }) => {
  const { theme } = useTheme();
  const _variant = useMemo(
    () =>
      new Map<typeof variant, CSSObject>([
        [
          "display1",
          {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: theme.pxToRem(64),
            lineHeight: theme.pxToRem(76),
          },
        ],
        [
          "display2",
          {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: theme.pxToRem(57),
            lineHeight: theme.pxToRem(64),
          },
        ],
        [
          "display3",
          {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: theme.pxToRem(45),
            lineHeight: theme.pxToRem(52),
          },
        ],
      ]),
    [variant]
  ).get(variant);
  const _size = useMemo(
    () =>
      new Map<typeof size, CSSObject>([
        [
          "large",
          {
            fontSize: theme.pxToRem(57),
            lineHeight: theme.pxToRem(64),
            letterSpacing: theme.pxToRem(-0.25),
          },
        ],
        [
          "medium",
          {
            fontSize: theme.pxToRem(45),
            lineHeight: theme.pxToRem(52),
          },
        ],
        [
          "small",
          {
            fontSize: theme.pxToRem(36),
            lineHeight: theme.pxToRem(44),
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
    _variant,
    _size
  ) as CSSObject;
});

DisplayTypography.defaultProps = {
  variant: "display3",
};

export default DisplayTypography;
