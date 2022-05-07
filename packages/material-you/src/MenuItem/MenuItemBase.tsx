import type { MenuItemOwnProps } from "./type";
import styled, { CSSObject } from "@emotion/styled";
import { useTheme } from "../theme";
import { useMemo } from "react";

const MenuItemBase = styled("div", {
  label: "menuItem",
})<Partial<MenuItemOwnProps>>(function MenuItemBase({ dense }) {
  const { theme } = useTheme();
  const _dense = useMemo(
    () =>
      new Map<typeof dense, CSSObject>([
        [
          true,
          {
            minHeight: theme.pxToRem(32),
          },
        ],
        [undefined, { minHeight: theme.pxToRem(48) }],
      ]),
    [dense]
  ).get(dense);
  return Object.assign(
    {
      display: "flex",
      alignItems: "center",
      gap: theme.pxToRem(12),
      paddingInline: theme.spacing(2),
      cursor: "pointer",
    },
    _dense
  ) as CSSObject;
});

export default MenuItemBase;
