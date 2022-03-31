import type { TitleTypographyOwnProps } from "../types";
import styled, { CSSObject } from "@emotion/styled";
import { useMemo } from "react";
import { useTheme } from "../theme";

const TitleTypography = styled("h2", {
  label: "TitleTypography",
})<Partial<TitleTypographyOwnProps>>(({ size }) => {
  const { theme } = useTheme();
  const _size = useMemo(
    () =>
      new Map<typeof size, CSSObject>([
        [
          "small",
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
            fontSize: theme.pxToRem(16),
            lineHeight: theme.pxToRem(24),
            letterSpacing: theme.pxToRem(0.1),
          },
        ],
        [
          "large",
          {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: theme.pxToRem(22),
            lineHeight: theme.pxToRem(28),
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

export default TitleTypography;
