import * as React from "react";
import type { StackItemOwnProps, PolymorphicWithRef } from "../types";
import { StackItemBase } from "../base-components";

type StackItemProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  StackItemOwnProps
>;
type StackItemElement = <E extends React.ElementType>(
  props: StackItemProps<E>
) => React.ReactElement<StackItemProps<E>>;

const StackItem: StackItemElement = React.forwardRef(
  <T extends React.ElementType>(
    props: StackItemProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component = "div", ...rest } = props;
    return (
      <StackItemBase
        as={component as typeof component}
        ref={innerRef}
        {...rest}
      />
    );
  }
);

export default StackItem;
