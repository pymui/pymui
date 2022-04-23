import type { CardImageOwnProps } from "../types";
import styled, { CSSObject } from "@emotion/styled";
import { useMemo } from "react";
import { useTheme } from "../theme";
import { store } from "../Card";
import { useSnapshot } from "valtio";

const CardImage = styled("img", {
  label: "CardImage",
})<Partial<CardImageOwnProps>>(({ objectFit, objectPosition, shape }) => {
  const { theme } = useTheme();
  const state = useSnapshot(store);
  const _fit = useMemo(
    () =>
      new Map<typeof objectFit, CSSObject>([
        ["cover", { objectFit: "cover" }],
        ["contain", { objectFit: "contain" }],
        ["fill", { objectFit: "fill" }],
      ]),
    [objectFit]
  ).get(objectFit);
  const _position = useMemo(
    () =>
      new Map<typeof objectPosition, CSSObject>([
        ["left", { objectPosition: "0 0" }],
        ["right", { objectPosition: "100% 0" }],
        ["top", { objectPosition: "0 0" }],
        ["bottom", { objectPosition: "0 100%" }],
        ["center", { objectPosition: "50% 50%" }],
      ]),
    [objectPosition]
  ).get(objectPosition);

  // Shape of the image - rounded or square
  const _shape = useMemo(
    () =>
      new Map<typeof shape, CSSObject>([
        ["rounded", { borderRadius: `${theme.spacing(state.radius)}` }],
        ["square", { borderRadius: 0 }],
      ]),
    [shape, state.radius]
  ).get(shape);

  return Object.assign({}, _fit, _position, _shape);
});

CardImage.defaultProps = {
  shape: "rounded",
};

export default CardImage;
