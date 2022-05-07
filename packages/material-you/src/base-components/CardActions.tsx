import type { CardActionsOwnProps } from "../types";
import styled, { CSSObject } from "@emotion/styled";
import { useMemo } from "react";
import { useTheme } from "../theme";

const CardActions = styled("div", {
  label: "CardActions",
})<Partial<CardActionsOwnProps>>(({ placeItems }) => {
  const { theme } = useTheme();
  const _placeItems = useMemo(
    () =>
      new Map<typeof placeItems, CSSObject>([
        ["start", { justifyContent: "flex-start" }],
        ["end", { justifyContent: "flex-end" }],
        ["center", { justifyContent: "center" }],
      ]),
    [placeItems]
  ).get(placeItems);
  return Object.assign(
    {
      display: "flex",
      flexDirection: "row",
      gap: theme.spacing(1),
      marginBlock: theme.spacing(2),
      marginInline: theme.spacing(2),
    },
    _placeItems
  );
});
CardActions.defaultProps = {
  placeItems: "end",
};

export default CardActions;
