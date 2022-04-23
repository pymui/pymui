import styled, { CSSObject } from "@emotion/styled";
import { useMemo } from "react";
import { useTheme } from "../theme";

interface Button {
  variant: "default" | "filled" | "outlined" | "text" | "elevated" | "tonal";
}

export type ButtonProps = Partial<Button>;

const Button = styled("button", {
  label: "Button",
})<ButtonProps>(({ variant }) => {
  const { theme, type } = useTheme();
  const buttonVariant = useMemo(
    () =>
      new Map<typeof variant, CSSObject>([
        // Filled Button CSS
        [
          "filled",
          {
            backgroundColor: new Map([
              ["light", theme.colorStyles.sys.light.primary],
              ["dark", theme.colorStyles.sys.dark.primary],
            ]).get(type),
            color: new Map([
              ["light", theme.colorStyles.sys.light.onPrimary],
              ["dark", theme.colorStyles.sys.dark.onPrimary],
            ]).get(type),
            // Hover State
            [":hover"]: {
              boxShadow: new Map([
                ["light", theme.effectStyles.light[1]],
                ["dark", theme.effectStyles.dark["1"]],
              ]).get(type),
            },
            // Disabled State
            [":disabled"]: {
              backgroundColor: `rgba(227, 227, 227, 0.12)`,
              color: new Map([
                ["light", theme.colorStyles.sys.light.onSurface],
                ["dark", theme.colorStyles.sys.dark.onSurface],
              ]).get(type),
            },
          },
        ],
        // Outlined Button CSS
        [
          "outlined",
          {
            backgroundColor: "inherit",
            border: new Map([
              ["light", `1px solid ${theme.colorStyles.sys.light.outline}`],
              ["dark", `1px solid ${theme.colorStyles.sys.dark.outline}`],
            ]).get(type),
            color: new Map([
              ["light", theme.colorStyles.sys.light.primary],
              ["dark", theme.colorStyles.sys.dark.primary],
            ]).get(type),
            // Hover State
            [":hover"]: {
              backgroundColor: new Map([
                ["light", theme.colorStyles.readOnly.light.primary.opacity08],
                ["dark", theme.colorStyles.readOnly.dark.primary.opacity08],
              ]).get(type),
            },
          },
        ],
        // Text Button CSS
        [
          "text",
          {
            backgroundColor: "inherit",
            color: new Map([
              ["light", theme.colorStyles.sys.light.primary],
              ["dark", theme.colorStyles.sys.dark.primary],
            ]).get(type),
            // Hover State
            [":hover"]: {
              backgroundColor: new Map([
                ["light", theme.colorStyles.readOnly.light.primary.opacity08],
                ["dark", theme.colorStyles.readOnly.dark.primary.opacity08],
              ]).get(type),
              opacity: 99.92,
            },
          },
        ],
        // Elevated Button CSS
        [
          "elevated",
          {
            backgroundImage: new Map([
              ["light", theme.colorStyles.readOnly.light.surface1],
              ["dark", theme.colorStyles.readOnly.dark.surface1],
            ]).get(type),
            color: new Map([
              ["light", theme.colorStyles.sys.light.primary],
              ["dark", theme.colorStyles.sys.dark.primary],
            ]).get(type),
            boxShadow: new Map([
              ["light", theme.effectStyles.light[1]],
              ["dark", theme.effectStyles.dark["1"]],
            ]).get(type),
            // Hover State
            [":hover"]: {
              boxShadow: new Map([
                ["light", theme.effectStyles.light[2]],
                ["dark", theme.effectStyles.dark["2"]],
              ]).get(type),
              backgroundImage: new Map([
                ["light", theme.colorStyles.readOnly.light.surface1],
                ["dark", theme.colorStyles.readOnly.dark.primary.opacity12],
              ]).get(type),
            },
            [":disabled"]: {
              backgroundColor: "rgba(31, 31, 31, 0.12)",
            },
          },
        ],
        // Tonal Button CSS
        [
          "tonal",
          {
            backgroundColor: new Map([
              ["light", theme.colorStyles.sys.dark.onSecondaryContainer],
              ["dark", theme.colorStyles.sys.dark.secondaryContainer],
            ]).get(type),
            color: new Map([
              ["light", theme.colorStyles.sys.light.onSecondaryContainer],
              ["dark", theme.colorStyles.sys.dark.onSecondaryContainer],
            ]).get(type),
            // Hover State
            [":hover"]: {
              boxShadow: new Map([
                ["light", theme.effectStyles.light[1]],
                ["dark", theme.effectStyles.dark["1"]],
              ]).get(type),
              background: new Map([
                ["dark", theme.colorStyles.sys.dark.secondaryContainer],
              ]).get(type),
              opacity: 99.92,
            },
          },
        ],
      ]),
    []
  );

  return Object.assign(
    {
      ...theme.typography.label.large,
      textTransform: "uppercase",
      display: "table-cell",
      padding: "0.5rem 1rem",
      verticalAlign: "middle",
      cursor: "pointer",
      border: "none",
      borderRadius: "2rem",
    },
    buttonVariant.get(variant)
  ) as CSSObject;
});

Button.defaultProps = {
  variant: "default",
};

export default Button;
