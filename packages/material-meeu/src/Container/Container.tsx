import React from "react";
import type { PolymorphicWithRef, ContainerOwnProps } from "../types";
import { ContainerBase } from "../base-components";

export type ContainerProps<E extends React.ElementType> = PolymorphicWithRef<
  E,
  ContainerOwnProps
>;

export type ContainerElement = <E extends React.ElementType = "div">(
  props: ContainerProps<E>
) => JSX.Element;

/**
 * **A Container is used to contain elements inside a specific width.** \
 * By default the maxWidth set to `lg` (1240px)
 */
const Container = React.forwardRef(
  <E extends React.ElementType>(
    props: ContainerProps<E>,
    innerRef: typeof props.ref
  ) => {
    const { component = "div", ...rest } = props;
    return (
      <ContainerBase
        as={component as typeof component}
        ref={innerRef}
        {...rest}
      />
    );
  }
) as ContainerElement;

export default Container;
