import * as React from "react";
import type { StackOwnProps, PolymorphicWithRef } from "../types";
import { StackBase } from "../base-components";
import { StackItem } from "../StackItem";

type StackProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  StackOwnProps
>;

type StackElement = <E extends React.ElementType = "div">(
  props: StackProps<E>
) => React.ReactElement<StackProps<E>>;

const StackRoot: StackElement = React.forwardRef(
  <E extends React.ElementType>(
    props: StackProps<E>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <StackBase ref={innerRef} as={component} {...rest} />;
  }
);

/**
 * **A Stack is a layout component that arranges its children in a horizontal or vertical stack.**
 */
const Stack = Object.assign(StackRoot, { Item: StackItem });

export default Stack;
