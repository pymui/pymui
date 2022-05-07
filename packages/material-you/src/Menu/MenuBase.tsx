import { useMemo } from "react";
import type { MenuOwnProps } from "./types";
import styled, { CSSObject } from "@emotion/styled";
import { useTheme } from "../theme";

const MenuBase = styled("div", {
  label: "menu",
})<Partial<MenuOwnProps>>(function Base() {
  const { theme, type } = useTheme();
  const _style = useMemo(
    () =>
      ({
        background: new Map([
          ["light", theme.colorStyles.readOnly.light.surface3],
          ["dark", theme.colorStyles.readOnly.dark.surface3],
        ]).get(type),
        color: new Map([
          ["light", theme.colorStyles.sys.light.onSurface],
          ["dark", theme.colorStyles.sys.dark.onSurface],
        ]).get(type),
        boxShadow: new Map([
          ["light", theme.effectStyles.getElevation("light", 2)],
          ["dark", theme.effectStyles.getElevation("dark", 2)],
        ]).get(type),
      } as CSSObject),
    [type]
  );

  return Object.assign(
    {
      borderRadius: theme.spacing(1),
      marginInline: theme.spacing(1),
      marginBlock: theme.spacing(0.5),
      zIndex: 10,
      width: "max-content",
    },
    _style
  );
});

export default MenuBase;
