import type { ListItemTextOwnProps } from "../types";
import styled, { CSSObject } from "@emotion/styled";
import { useTheme } from "../theme";
import { useMemo } from "react";

const ListItemText = styled("span", {
  label: "ListItemText",
})<Partial<ListItemTextOwnProps>>(({ variant }) => {
  const { theme } = useTheme();
  const _variant = useMemo(
    () =>
      new Map<typeof variant, CSSObject>([
        [
          "body",
          {
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: theme.pxToRem(16),
            lineHeight: theme.pxToRem(24),
            letterSpacing: theme.pxToRem(0.5),
          },
        ],
        [
          "label",
          {
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: theme.pxToRem(14),
            lineHeight: theme.pxToRem(20),
            letterSpacing: theme.pxToRem(0.1),
          },
        ],
      ]),
    [variant]
  ).get(variant);
  return Object.assign(
    {
      flexGrow: 1,
      fontFamily: `Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      marginBlockStart: theme.spacing(1),
      marginBlockEnd: theme.spacing(1),
    },
    _variant
  );
});

ListItemText.defaultProps = {
  variant: "body",
};

export default ListItemText;
