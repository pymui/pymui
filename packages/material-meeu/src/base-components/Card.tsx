import type { CardOwnProps } from "../types";
import styled, { CSSObject } from "@emotion/styled";
import { useTheme } from "../theme";
import { useMemo } from "react";
import { store } from "../Card";
import { useSnapshot } from "valtio";
import { useEffect } from "react";

const Card = styled("div", {
  label: "Card",
})<Partial<CardOwnProps>>(({ variant, elevation = 1, shape, radius = 1 }) => {
  const { theme, type } = useTheme();
  const state = useSnapshot(store);
  const _variant = useMemo(
    () =>
      new Map<typeof variant, CSSObject>([
        [
          "elevated",
          {
            color: new Map([
              ["light", theme.colorStyles.sys.light.onSurfaceVariant],
              ["dark", theme.colorStyles.sys.dark.onSurfaceVariant],
            ]).get(type),
            background: new Map([
              ["light", theme.colorStyles.readOnly.light.surface1],
              ["dark", theme.colorStyles.readOnly.dark.surface1],
            ]).get(type),
            boxShadow: new Map([
              ["light", theme.effectStyles.getElevation("light", elevation)],
              ["dark", theme.effectStyles.getElevation("dark", elevation)],
            ]).get(type),
          },
        ],
        [
          "filled",
          {
            background: new Map([
              ["light", theme.colorStyles.sys.light.surfaceVariant],
              ["dark", theme.colorStyles.sys.dark.surfaceVariant],
            ]).get(type),
            color: new Map([
              ["light", theme.colorStyles.sys.light.onSurfaceVariant],
              ["dark", theme.colorStyles.sys.dark.onSurface],
            ]).get(type),
          },
        ],
        [
          "outlined",
          {
            border: new Map([
              ["light", `1px solid ${theme.colorStyles.sys.light.outline}`],
              ["dark", `1px solid ${theme.colorStyles.sys.dark.outline}`],
            ]).get(type),
            color: new Map([
              ["light", theme.colorStyles.sys.light.onSurfaceVariant],
              ["dark", theme.colorStyles.sys.dark.onSurfaceVariant],
            ]).get(type),
            background: new Map([
              ["light", theme.colorStyles.readOnly.light.surface1],
              ["dark", theme.colorStyles.readOnly.dark.surface1],
            ]).get(type),
          },
        ],
      ]),
    [variant, elevation, type]
  ).get(variant) as CSSObject;
  const _shape = useMemo(
    () =>
      new Map<typeof shape, CSSObject>([
        ["rounded", { borderRadius: theme.spacing(radius) }],
      ]),
    [shape, radius]
  ).get(shape) as CSSObject;

  // Sharing the state with the image component
  useEffect(() => {
    state.setRadius(radius);
  }, [radius]);
  return Object.assign(
    {
      // display: "flex",
      // flexDirection: "column",
      // alignItems: "flex-start",
      overflow: "hidden",
    },
    _variant,
    _shape
  ) as CSSObject;
});

Card.defaultProps = {
  variant: "elevated",
  shape: "rounded",
};

export default Card;
