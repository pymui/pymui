import type { SurfaceOwnProps } from "../types";
import styled, { CSSObject } from "@emotion/styled";
import { useMemo } from "react";
import { useTheme } from "../theme";

const Surface = styled("div", {
  label: "Surface",
})<Partial<SurfaceOwnProps>>(({ variant, elevation, shape, radius }) => {
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
          "filled",
          {
            background: new Map([
              ["light", theme.colorStyles.readOnly.light.surface1],
              ["dark", theme.colorStyles.readOnly.dark.surface1],
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
        ["rounded", { borderRadius: theme.spacing(radius ?? 1) }],
      ]),
    [shape, radius]
  ).get(shape) as CSSObject;
  return Object.assign({}, _variant, _shape) as CSSObject;
});

Surface.defaultProps = {
  variant: "filled",
  shape: "rounded",
};

export default Surface;
