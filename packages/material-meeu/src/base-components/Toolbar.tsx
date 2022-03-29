import styled, { CSSObject } from "@emotion/styled";
import { useMemo } from "react";
import type { ToolbarOwnProps } from "../types";

const Toolbar = styled("div", {
  label: "Toolbar",
})<Partial<ToolbarOwnProps>>(({ dense }) => {
  const _dense = useMemo(
    () =>
      new Map<typeof dense, CSSObject>([
        [
          undefined,
          {
            minHeight: "4rem",
          },
        ],
        [true, { minHeight: "2rem" }],
      ]),
    [dense]
  ).get(dense);
  return Object.assign(
    {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    _dense
  ) as CSSObject;
});

export default Toolbar;
