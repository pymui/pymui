import type { HeadlineOwnProps } from "../types";
import styled, { CSSObject } from "@emotion/styled";
import { useMemo } from "react";
import { useTheme } from "../theme";

const Headline = styled("h2", {
  label: "Headline",
})<Partial<HeadlineOwnProps>>(({ variant }) => {
  const { theme } = useTheme();
  const _variant = useMemo(
    () =>
      new Map<typeof variant, CSSObject>([
        [
          "h1",
          {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: theme.pxToRem(36),
            lineHeight: theme.pxToRem(44),
            marginBlockStart: theme.spacing(2),
            marginBlockEnd: theme.spacing(2),
          },
        ],
        [
          "h2",
          {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: theme.pxToRem(32),
            lineHeight: theme.pxToRem(40),
            marginBlockStart: theme.spacing(1.5),
            marginBlockEnd: theme.spacing(1.5),
          },
        ],
        [
          "h3",
          {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: theme.pxToRem(28),
            lineHeight: theme.pxToRem(36),
          },
        ],
        [
          "h4",
          {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: theme.pxToRem(24),
            lineHeight: theme.pxToRem(32),
          },
        ],
        [
          "h5",
          {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: theme.pxToRem(22),
            lineHeight: theme.pxToRem(28),
          },
        ],
        [
          "h6",
          {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: theme.pxToRem(18),
            lineHeight: theme.pxToRem(24),
          },
        ],
        [
          "subhead1",
          {
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: theme.pxToRem(16),
            lineHeight: theme.pxToRem(24),
          },
        ],
        [
          "subhead2",
          {
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: theme.pxToRem(14),
            lineHeight: theme.pxToRem(20),
          },
        ],
      ]),
    [variant]
  ).get(variant) as CSSObject;
  return Object.assign(
    {
      fontFamily: `Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      marginBlockStart: theme.spacing(1),
      marginBlockEnd: theme.spacing(1),
    },
    _variant
  ) as CSSObject;
});

Headline.defaultProps = {
  variant: "h2",
};

export default Headline;
