import type { SurfaceOwnProps } from "../types";
import styled, { CSSObject } from "@emotion/styled";
import { useMemo } from "react";
import { useTheme } from "../theme";

type Props = {
  variant?: "elevated" | "outlined" | "flat";
  elevation?: number;
  radius?: number;
  corner?: "rounded" | "square";
} & SurfaceOwnProps;

const Surface = styled("div", {
  label: "Surface",
})<Partial<Props>>(({ variant, elevation, corner, radius }) => {
  const { theme, type } = useTheme();
  const _variant = useMemo(
    () =>
      new Map<typeof variant, CSSObject>([
        [
          "elevated",
          {
            background: new Map([
              ["light", theme.colorStyles.readOnly.light.surface1],
              ["dark", theme.colorStyles.readOnly.dark.surface1],
            ]).get(type),
            boxShadow: new Map([
              [
                "light",
                theme.effectStyles.getElevation("light", elevation ?? 1),
              ],
              ["dark", theme.effectStyles.getElevation("dark", elevation ?? 1)],
            ]).get(type),
          },
        ],
        [
          "flat",
          {
            background: new Map([
              ["light", theme.colorStyles.readOnly.light.surface1],
              ["dark", theme.colorStyles.readOnly.dark.surface1],
            ]).get(type),
          },
        ],
      ]),
    [variant, elevation, type, theme]
  ).get(variant) as CSSObject;
  const _corner = useMemo(
    () =>
      new Map<typeof corner, CSSObject>([
        ["rounded", { borderRadius: theme.spacing(radius ?? 1) }],
      ]),
    [corner, radius, theme]
  ).get(corner) as CSSObject;
  return Object.assign({}, _variant, _corner) as CSSObject;
});

Surface.defaultProps = {
  variant: "flat",
};

export default Surface;
