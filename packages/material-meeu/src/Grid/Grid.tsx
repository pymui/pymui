import React from "react";
import { GridOwnProps, PolymorphicWithRef } from "../types";
import { GridBase } from "../base-components";
import { GridItem } from "../GridItem";

type GridProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  GridOwnProps
>;

type GridElement = <E extends React.ElementType<any> = "div">(
  props: GridProps<E>
) => React.ReactElement<GridProps<E>>;

const GridContainer: GridElement = React.forwardRef(
  <T extends React.ElementType>(
    props: GridProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component = "div", ...rest } = props;
    return (
      <GridBase as={component as typeof component} ref={innerRef} {...rest} />
    );
  }
);

/**
 * **A Grid is a two dimensional layout utility that arranges elements in rows and columns.** \
 * By default it has 12 columns.
 */
const Grid = Object.assign(GridContainer, { Item: GridItem });

export default Grid;
