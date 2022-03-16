// * Documentation is needed
// * Make the component Polymorphic

import { ComponentPropsWithoutRef } from "react";
import { StackBase } from "../base-components";

type BaseProps = React.ComponentProps<typeof StackBase>;
type StackProps = Omit<BaseProps, "as" | "theme"> & {
  component?: React.ElementType;
} & ComponentPropsWithoutRef<"div">;

/**
 * **A Stack is a layout component that arranges its children in a horizontal or vertical stack.**
 */
const Stack: React.FC<StackProps> = (props) => {
  const component = props.component ?? "div";
  return <StackBase as={component} {...props} />;
};

export default Stack;
