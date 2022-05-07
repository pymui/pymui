import * as React from "react";
import type { ToolbarOwnProps, PolymorphicWithRef } from "../types";
import { ToolbarBase } from "../base-components";

type ToolbarProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  ToolbarOwnProps
>;

type ToolbarElement = <T extends React.ElementType = "div">(
  props: ToolbarProps<T>
) => React.ReactElement<ToolbarProps<T>>;

const Toolbar: ToolbarElement = React.forwardRef(
  <T extends React.ElementType>(
    props: ToolbarProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <ToolbarBase ref={innerRef} as={component} {...rest} />;
  }
);

export default Toolbar;
