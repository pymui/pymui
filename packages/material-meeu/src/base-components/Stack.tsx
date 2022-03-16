import styled, { CSSObject } from "@emotion/styled";
import { useMemo } from "react";

type Direction = "row" | "column" | "row-reverse" | "column-reverse";
type Warp = "wrap" | "nowrap" | "wrap-reverse";
type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
type AlignItems = "start" | "end" | "center" | "stretch" | "baseline";
type AlignContent =
  | "start"
  | "end"
  | "center"
  | "stretch"
  | "space-between"
  | "space-around";

interface IStack {
  gap: 1 | 2 | 3 | 4 | 5;
  /**
   * **The direction of the Stack items.**
   *
   *  *Default: `column`*
   *
   * - `row`: Items are laid out horizontally.
   * - `column`: Items are laid out vertically.
   * - `row-reverse`: Items are laid out horizontally, in reverse order.
   * - `column-reverse`: Items are laid out vertically, in reverse order.
   */
  direction: Direction;
  /**
   * **The wrapping behavior for the Stack items.**
   *
   * *Default: `wrap`*
   * - `wrap`: Items are laid out in multiple lines.
   * - `nowrap`: Items are laid out in a single line.
   */
  wrap: Warp;
  /**
   * **The justification of the Stack items.**
   *
   * *Default: `flex-start`*
   * - `flex-start`: Items are packed toward the start line.
   * - `flex-end`: Items are packed toward the end line.
   * - `center`: Items are packed toward the center line.
   * - `space-between`: Items are evenly distributed in the line.
   * - `space-around`: Items are evenly distributed in the line, with equal spacing around the items.
   * - `space-evenly`: Items are evenly distributed in the line, with equal spacing before and after the items.
   */
  justifyContent: JustifyContent;
  /**
   * **The alignment of the Stack items.**
   *
   * *Default: `stretch`*
   * - `start`: Items are aligned to the start line.
   * - `end`: Items are aligned to the end line.
   * - `center`: Items are centered in the line.
   * - `stretch`: Items are stretched to fill the line.
   * - `baseline`: Items are aligned to the baseline.
   *
   */
  alignItems: AlignItems;
  /**
   * **The alignment of the content of the Stack items.**
   *
   * *Default: `stretch`*
   * - `start`: Items are aligned to the start line.
   * - `end`: Items are aligned to the end line.
   * - `center`: Items are centered in the line.
   * - `stretch`: Items are stretched to fill the line.
   * - `space-between`: Items are evenly distributed in the line.
   * - `space-around`: Items are evenly distributed in the line, with equal spacing around the items.
   */
  alignContent: AlignContent;
}

const Stack = styled("div")<Partial<IStack>>(
  ({ direction, wrap, justifyContent, alignItems, alignContent }) => {
    // TODO: Add Flex Gap support
    // Flex Direction
    const flexDirection = useMemo(
      () =>
        new Map<Direction, CSSObject>([
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
        new Map<Warp, CSSObject>([
          ["nowrap", { flexWrap: "nowrap" }],
          ["wrap", { flexWrap: "wrap" }],
          ["wrap-reverse", { flexWrap: "wrap-reverse" }],
        ]),
      []
    );
    // Justify Content
    const flexJustifyContent = useMemo(
      () =>
        new Map<JustifyContent, CSSObject>([
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
        new Map<AlignItems, CSSObject>([
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
        new Map<AlignContent, CSSObject>([
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
