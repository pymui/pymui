import type { DrawerItemOwnProps } from "./types";
import styled, { CSSObject } from "@emotion/styled";
import { useMemo } from "react";
import { useTheme } from "../theme";

const BaseDrawerItem = styled("li", {
  label: "DrawerItem",
})<Partial<DrawerItemOwnProps>>(({ dense, active = false }) => {
  const { theme, type } = useTheme();
  const _dense = useMemo(() => new Map<typeof dense, CSSObject>(), []);
  _dense.set(true, {
    minHeight: theme.pxToRem(48),
  });
  const _active = useMemo(() => new Map<typeof active, CSSObject>(), []);
  _active.set(true, {
    backgroundColor: new Map<typeof type, string>()
      .set("light", theme.colorStyles.sys.light.secondaryContainer)
      .set("dark", theme.colorStyles.sys.dark.secondaryContainer)
      .get(type),
  });
  const _rippleBG = useMemo(() => new Map<typeof type, string>(), []);
  _rippleBG
    .set("dark", theme.colorStyles.readOnly.dark.onSecondaryContainer.opacity12)
    .set(
      "light",
      theme.colorStyles.readOnly.light.onSecondaryContainer.opacity12
    );
  const _hover = useMemo(() => new Map<typeof type, CSSObject>(), []);
  _hover
    .set("light", {
      [`&: after`]: {
        background:
          theme.colorStyles.readOnly.light.onSecondaryContainer.opacity08,
      },
    })
    .set("dark", {
      [`&: after`]: {
        backgroundColor:
          theme.colorStyles.readOnly.dark.onSecondaryContainer.opacity08,
      },
    });

  return Object.assign(
    {
      display: "flex",
      alignItems: "center",
      minHeight: theme.pxToRem(56),
      paddingInline: theme.pxToRem(28),
      position: "relative",
      overflow: "hidden",
      boxSizing: "content-box",
      borderRadius: theme.pxToRem(28),

      [`&: hover`]: {
        ..._hover.get(type),
        backgroundClip: "border-box",
      },
      [`> [data-label="drawer"]`]: {
        flexGrow: 1,
        paddingRight: theme.pxToRem(12),
      },
      [`> [data-icon="drawer"]`]: {
        paddingRight: theme.pxToRem(12),
      },
      [`> [data-ripple]`]: {
        background: _rippleBG.get(type),
      },
      [`&: after`]: {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      },
    },
    _dense.get(dense),
    _active.get(active)
  );
});

export default BaseDrawerItem;
