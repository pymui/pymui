import type { CardHeaderAvatarOwnProps } from "../types";
import styled, { CSSObject } from "@emotion/styled";
import { Children, useMemo } from "react";
import { useTheme } from "../theme";

const CardHeaderAvatar = styled("div", {
  label: "CardHeaderAvatar",
})<Partial<CardHeaderAvatarOwnProps>>(({ children }) => {
  const { theme, type } = useTheme();
  // checking if the children is string?
  const isString = Children.toArray(children).some(
    (child) => typeof child === "string"
  );
  const _background = useMemo(
    () =>
      new Map<typeof isString, CSSObject>([
        [
          true,
          {
            background: new Map([
              ["light", theme.colorStyles.sys.light.primary],
              ["dark", theme.colorStyles.sys.dark.primary],
            ]).get(type),
            color: new Map([
              ["light", theme.colorStyles.ref.primary.primary100],
              ["dark", theme.colorStyles.ref.primary.primary0],
            ]).get(type),
          },
        ],
      ]),
    [isString, type]
  ).get(isString);

  return Object.assign(
    {
      display: "grid",
      placeItems: "center",
      justifySelf: "start",
      height: "40px",
      width: "40px",
      borderRadius: "100px",

      //   should be removed
      // border: "1px solid red",

      // Grid item properties
      gridColumnStart: "1",
      gridColumnEnd: "2",
      gridRowStart: "1",
      gridRowEnd: "3",
    },
    _background
  );
});

export default CardHeaderAvatar;
