import type { IconOwnProps } from "./types";
import styled, { CSSObject } from "@emotion/styled";
import { useTheme } from "../theme";

// base component
const IconBase = styled("div", {
  label: "icon-base",
})<Partial<IconOwnProps>>(() => {
  const { theme, type } = useTheme();

  return Object.assign({
    // place the icon at the center of the container
    display: "grid",
    placeItems: "center",
    //make the icon circle
    borderRadius: "50%",
    color: new Map([
      ["light", theme.colorStyles.sys.light.onSurfaceVariant],
      ["dark", theme.colorStyles.sys.dark.onSurfaceVariant],
    ]).get(type),
    minHeight: theme.pxToRem(24),
    minWidth: theme.pxToRem(24),
  }) as CSSObject;
});

export default IconBase;
