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
) => JSX.Element;

const Grid = React.forwardRef(
  <T extends React.ElementType>(
    props: GridProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component = "div", ...rest } = props;
    return (
      <GridBase as={component as typeof component} ref={innerRef} {...rest} />
    );
  }
) as GridElement;

/**
 * **A Grid is a two dimensional layout utility that arranges elements in rows and columns.** \
 * By default it has 12 columns.
 */
const GridContainer = Object.assign(Grid, { Item: GridItem });

export { GridContainer as Grid };
