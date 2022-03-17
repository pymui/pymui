import { FC } from "react";
import { IComponent } from "../types";
import { GridItemBase } from "../base-components";

type BaseProps = React.ComponentProps<typeof GridItemBase>;
type GridItemProps = Omit<BaseProps, "as" | "theme"> &
  IComponent &
  React.ComponentPropsWithoutRef<"div">;

/**
 * **A GridItem is a Child Element of a Grid Component.** \
 *  By default a GridItem is span to 12 Columns on all screen size.
 */
const GridItem: FC<GridItemProps> = (props) => {
  const component = props.component ?? "div";
  return <GridItemBase as={component} {...props} />;
};
export default GridItem;
