import { FC } from "react";
import { IComponent } from "../types";
import { GridBase } from "../base-components";

type GridProps = Omit<React.ComponentProps<typeof GridBase>, "as" | "theme"> &
  IComponent;

/**
 * **A Grid is a two dimensional layout utility that arranges elements in rows and columns.** \
 * By default it has 12 columns.
 */
const Grid: FC<GridProps> = (props) => {
  const component = props.component ?? "div";
  return <GridBase as={component} {...props} />;
};

export default Grid;
