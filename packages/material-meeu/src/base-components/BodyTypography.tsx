import type { BodyTypographyOwnProps } from "../types";
import styled, { CSSObject } from "@emotion/styled";
import { useMemo } from "react";
import { useTheme } from "../theme";

const BodyTypography = styled("p", {
  label: "BodyTypography",
})<Partial<BodyTypographyOwnProps>>(({ variant, size, supportingText }) => {
  const { theme } = useTheme();
  const _variant = useMemo(
    () =>
      new Map<typeof variant, CSSObject>([
        [
          "body1",
          {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: theme.pxToRem(16),
            lineHeight: theme.pxToRem(24),
            letterSpacing: theme.pxToRem(0.5),
          },
        ],
        [
          "body2",
          {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: theme.pxToRem(14),
            lineHeight: theme.pxToRem(20),
            letterSpacing: theme.pxToRem(0.25),
          },
        ],
        [
          "caption",
          {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: theme.pxToRem(12),
            lineHeight: theme.pxToRem(16),
            letterSpacing: theme.pxToRem(0.4),
          },
        ],
        [
          "overline",
          {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: theme.pxToRem(12),
            lineHeight: theme.pxToRem(16),
            letterSpacing: theme.pxToRem(0.5),
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
            fontSize: theme.pxToRem(16),
            lineHeight: theme.pxToRem(24),
            letterSpacing: theme.pxToRem(0.5),
          },
        ],
        [
          "medium",
          {
            fontSize: theme.pxToRem(14),
            lineHeight: theme.pxToRem(20),
            letterSpacing: theme.pxToRem(0.25),
          },
        ],
        [
          "small",
          {
            fontSize: theme.pxToRem(12),
            lineHeight: theme.pxToRem(16),
            letterSpacing: theme.pxToRem(0.4),
          },
        ],
      ]),
    [size]
  ).get(size);
  const _supportingText = useMemo(
    () =>
      new Map<typeof supportingText, CSSObject>([
        [
          true,
          {
            marginInline: theme.spacing(2),
            marginBlock: theme.spacing(3),
          },
        ],
      ]),
    [supportingText]
  ).get(supportingText);
  return Object.assign(
    {
      fontFamily: `Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: theme.pxToRem(16),
      lineHeight: theme.pxToRem(24),
      letterSpacing: theme.pxToRem(0.5),
      marginBlockStart: theme.spacing(1),
      marginBlockEnd: theme.spacing(1),
    },
    _variant,
    _size,
    _supportingText
  );
});

export default BodyTypography;
