import type { IContainer } from "../types";
import styled, { CSSObject } from "@emotion/styled";
import { useTheme } from "../theme";
import { useMemo } from "react";

const Container = styled("div", {
  label: "Container",
})<Partial<IContainer>>(({ maxWidth }) => {
  const { theme } = useTheme();
  const _maxWidth = useMemo(
    () =>
      new Map<typeof maxWidth, CSSObject>([
        ["sm", { maxWidth: theme.breakPoints.points("sm") }],
        ["md", { maxWidth: theme.breakPoints.points("md") }],
        ["lg", { maxWidth: theme.breakPoints.points("lg") }],
        ["xl", { maxWidth: theme.breakPoints.points("xl") }],
      ]),
    []
  ).get(maxWidth) as CSSObject;
  return Object.assign(
    {
      margin: "0 auto",
    },
    _maxWidth
  ) as CSSObject;
});

Container.defaultProps = {
  maxWidth: "lg",
};

export default Container;
