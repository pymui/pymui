import styled, { CSSObject } from "@emotion/styled";
import type { ButtonOwnProps } from "../types";
import { useMemo } from "react";
import { useTheme } from "../theme";

const Button = styled("button", {
  label: "Button",
})<Partial<ButtonOwnProps>>(({ variant, shape = "full" }) => {
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
            // effect on the ripple
            ["> [data-ripple]"]: {
              background: new Map([
                ["light", theme.colorStyles.readOnly.light.onPrimary.opacity12],
                ["dark", theme.colorStyles.readOnly.dark.onPrimary.opacity12],
              ]).get(type),
            },
            // Hover State
            [":hover"]: {
              boxShadow: new Map([
                ["light", theme.effectStyles.light[1]],
                ["dark", theme.effectStyles.dark["1"]],
              ]).get(type),
              [":after"]: {
                content: "''",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: new Map([
                  [
                    "light",
                    theme.colorStyles.readOnly.light.onPrimary.opacity08,
                  ],
                  ["dark", theme.colorStyles.readOnly.dark.onPrimary.opacity08],
                ]).get(type),
              },
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
            // effect on the ripple
            ["> [data-ripple]"]: {
              background: new Map([
                ["light", theme.colorStyles.readOnly.light.primary.opacity12],
                ["dark", theme.colorStyles.readOnly.dark.primary.opacity12],
              ]).get(type),
            },
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
            // effect on the ripple
            ["> [data-ripple]"]: {
              background: new Map([
                ["light", theme.colorStyles.readOnly.light.primary.opacity12],
                ["dark", theme.colorStyles.readOnly.dark.primary.opacity12],
              ]).get(type),
            },
            // Hover State
            [":hover"]: {
              backgroundColor: new Map([
                ["light", theme.colorStyles.readOnly.light.primary.opacity08],
                ["dark", theme.colorStyles.readOnly.dark.primary.opacity08],
              ]).get(type),
            },
          },
        ],
        // Elevated Button CSS
        [
          "elevated",
          {
            background: new Map([
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
            // effect on the ripple
            ["> [data-ripple]"]: {
              background: new Map([
                ["light", theme.colorStyles.readOnly.light.primary.opacity12],
                ["dark", theme.colorStyles.readOnly.dark.primary.opacity12],
              ]).get(type),
            },
            // Hover State
            [":hover"]: {
              boxShadow: new Map([
                ["light", theme.effectStyles.light[2]],
                ["dark", theme.effectStyles.dark["2"]],
              ]).get(type),
              [":after"]: {
                content: `""`,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: new Map([
                  ["light", theme.colorStyles.readOnly.light.primary.opacity12],
                  ["dark", theme.colorStyles.readOnly.dark.primary.opacity12],
                ]).get(type),
              },
            },
          },
        ],
        // Tonal Button CSS
        [
          "tonal",
          {
            background: new Map([
              ["light", theme.colorStyles.sys.dark.onSecondaryContainer],
              ["dark", theme.colorStyles.sys.dark.secondaryContainer],
            ]).get(type),
            color: new Map([
              ["light", theme.colorStyles.sys.light.onSecondaryContainer],
              ["dark", theme.colorStyles.sys.dark.onSecondaryContainer],
            ]).get(type),
            // effect on the ripple
            ["> [data-ripple]"]: {
              background: new Map([
                [
                  "light",
                  theme.colorStyles.readOnly.light.onSecondaryContainer
                    .opacity12,
                ],
                [
                  "dark",
                  theme.colorStyles.readOnly.dark.onSecondaryContainer
                    .opacity12,
                ],
              ]).get(type),
            },
            // Hover State
            [":hover"]: {
              boxShadow: new Map([
                ["light", theme.effectStyles.light[1]],
                ["dark", theme.effectStyles.dark["1"]],
              ]).get(type),
              [":after"]: {
                content: `""`,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: new Map([
                  [
                    "light",
                    theme.colorStyles.readOnly.light.onSecondaryContainer
                      .opacity08,
                  ],
                  [
                    "dark",
                    theme.colorStyles.readOnly.dark.onSecondaryContainer
                      .opacity08,
                  ],
                ]).get(type),
              },
            },
          },
        ],
      ]),
    [type]
  );

  const _shape = useMemo(
    () =>
      new Map<typeof shape, CSSObject>([
        [
          "none",
          {
            borderRadius: 0,
          },
        ],
        [
          "xs",
          {
            borderRadius: theme.pxToRem(4),
          },
        ],
        [
          "sm",
          {
            borderRadius: theme.pxToRem(8),
          },
        ],
        [
          "md",
          {
            borderRadius: theme.pxToRem(12),
          },
        ],
        [
          "lg",
          {
            borderRadius: theme.pxToRem(16),
          },
        ],
        [
          "xl",
          {
            borderRadius: theme.pxToRem(28),
          },
        ],
        [
          "full",
          {
            borderRadius: "9999px",
          },
        ],
      ]),
    [shape]
  ).get(shape);

  return Object.assign(
    {
      fontFamily: `Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: theme.pxToRem(14),
      lineHeight: theme.pxToRem(20),
      letterSpacing: theme.pxToRem(0.1),
      position: "relative",
      overflow: "hidden",
      textTransform: "uppercase",
      minHeight: theme.pxToRem(40),
      paddingBlock: theme.pxToRem(10),
      paddingInline: theme.pxToRem(24),
      verticalAlign: "middle",
      cursor: "pointer",
      border: "none",
      borderRadius: theme.pxToRem(20),
    },
    buttonVariant.get(variant),
    _shape
  ) as CSSObject;
});

Button.defaultProps = {
  variant: "default",
};

export default Button;
