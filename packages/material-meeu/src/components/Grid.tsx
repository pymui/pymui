import { FC } from "react";
import { IComponent } from "../types";
import { GridBase } from "../base-components";
import GridItem from "./GridItem";

type GridProps = Omit<React.ComponentProps<typeof GridBase>, "as" | "theme"> &
  IComponent;

interface IGrid {
  /**
   * **Item is a Child Element of a Grid Component.** \
   *  By default a GridItem is span to 12 Columns on all screen size.
   */
  Item: typeof GridItem;
}

/**
 * **A Grid is a two dimensional layout utility that arranges elements in rows and columns.** \
 * By default it has 12 columns.
 */
const Grid: FC<GridProps> & IGrid = (props) => {
  const component = props.component ?? "div";
  return <GridBase as={component} {...props} />;
};

Grid.Item = GridItem;

export default Grid;
