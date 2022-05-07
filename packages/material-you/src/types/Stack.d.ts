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

export type StackOwnProps = {
  gap?: 1 | 2 | 3 | 4 | 5;
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
  direction?: Direction;
  /**
   * **The wrapping behavior for the Stack items.**
   *
   * *Default: `wrap`*
   * - `wrap`: Items are laid out in multiple lines.
   * - `nowrap`: Items are laid out in a single line.
   */
  wrap?: Warp;
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
  justifyContent?: JustifyContent;
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
  alignItems?: AlignItems;
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
  alignContent?: AlignContent;
};
