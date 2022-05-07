import styled, { CSSObject } from "@emotion/styled";
import type { AppBarOwnProps } from "../types";
import { useTheme } from "../theme";
import { useMemo } from "react";

// Do all the CSS Staffs

type Props = {
  variant: "standard" | "elevated";
  elevation: number;
} & AppBarOwnProps;

const AppBar = styled("div", {
  label: "AppBar",
})<Partial<Props>>(({ variant, elevation }) => {
  const { theme, type } = useTheme();

  const _variant = useMemo(
    () =>
      new Map<typeof variant, CSSObject>([
        [
          "standard",
          {
            background: new Map([
              ["light", theme.colorStyles.sys.light.surface],
              ["dark", theme.colorStyles.sys.dark.surface],
            ]).get(type),
          },
        ],
        [
          "elevated",
          {
            background: new Map([
              ["light", theme.colorStyles.readOnly.light.surface2],
              ["dark", theme.colorStyles.readOnly.dark.surface2],
            ]).get(type),
            boxShadow: new Map([
              [
                "light",
                theme.effectStyles.getElevation("light", elevation ?? 2),
              ],
              ["dark", theme.effectStyles.getElevation("dark", elevation ?? 2)],
            ]).get(type),
          },
        ],
      ]),
    [variant, type, elevation]
  ).get(variant);
  return Object.assign({}, _variant) as CSSObject;
});

AppBar.defaultProps = {
  variant: "standard",
};

export default AppBar;
