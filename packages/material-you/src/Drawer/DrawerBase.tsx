import type { DrawerOwnProps } from "./types";
import styled, { CSSObject } from "@emotion/styled";
import { useTheme } from "../theme";
import { useMemo } from "react";

const DrawerBase = styled("nav", {
  label: "Drawer",
})<Partial<DrawerOwnProps>>(() => {
  const { theme, type } = useTheme();

  const _background = useMemo(() => new Map<typeof type, CSSObject>(), [type])
    .set("light", {
      background: theme.colorStyles.sys.light.surface,
    })
    .set("dark", {
      background: theme.colorStyles.sys.dark.surface,
    })
    .get(type) as CSSObject;
  return Object.assign(
    {
      width: "100%",
      height: "100%",
      maxWidth: theme.pxToRem(360),
    },
    _background
  );
});

export default DrawerBase;
