import type { StackOwnProps } from "../types";
import styled, { CSSObject } from "@emotion/styled";
import { useMemo } from "react";

const Stack = styled("div", {
  label: "Stack",
})<StackOwnProps>(
  ({ direction, wrap, justifyContent, alignItems, alignContent }) => {
    // TODO: Add Flex Gap support
    // Flex Direction
    const flexDirection = useMemo(
      () =>
        new Map<typeof direction, CSSObject>([
          ["row", { flexDirection: "row" }],
          ["column", { flexDirection: "column" }],
          ["row-reverse", { flexDirection: "row-reverse" }],
          ["column-reverse", { flexDirection: "column-reverse" }],
        ]),
      []
    );
    // Flex Wrap
    const flexWrap = useMemo(
      () =>
        new Map<typeof wrap, CSSObject>([
          ["nowrap", { flexWrap: "nowrap" }],
          ["wrap", { flexWrap: "wrap" }],
          ["wrap-reverse", { flexWrap: "wrap-reverse" }],
        ]),
      []
    );
    // Justify Content
    const flexJustifyContent = useMemo(
      () =>
        new Map<typeof justifyContent, CSSObject>([
          ["flex-start", { justifyContent: "flex-start" }],
          ["flex-end", { justifyContent: "flex-end" }],
          ["center", { justifyContent: "center" }],
          ["space-between", { justifyContent: "space-between" }],
          ["space-around", { justifyContent: "space-around" }],
          ["space-evenly", { justifyContent: "space-evenly" }],
        ]),
      []
    );
    // Align Items
    const flexAlignItems = useMemo(
      () =>
        new Map<typeof alignItems, CSSObject>([
          ["start", { alignItems: "start" }],
          ["end", { alignItems: "end" }],
          ["center", { alignItems: "center" }],
          ["stretch", { alignItems: "stretch" }],
          ["baseline", { alignItems: "baseline" }],
        ]),
      []
    );
    //  Align Content
    const flexAlignContent = useMemo(
      () =>
        new Map<typeof alignContent, CSSObject>([
          ["start", { alignContent: "start" }],
          ["end", { alignContent: "end" }],
          ["center", { alignContent: "center" }],
          ["stretch", { alignContent: "stretch" }],
          ["space-between", { alignContent: "space-between" }],
          ["space-around", { alignContent: "space-around" }],
        ]),
      []
    );

    return Object.assign(
      {
        display: "flex",
      } as CSSObject,
      flexDirection.get(direction ?? "column"),
      flexWrap.get(wrap ?? "wrap"),
      flexJustifyContent.get(justifyContent ?? "flex-start"),
      flexAlignItems.get(alignItems ?? "stretch"),
      flexAlignContent.get(alignContent ?? "stretch")
    );
  }
);

export default Stack;
