import * as React from "react";
import type { ToolbarOwnProps, PolymorphicWithoutRef } from "../types";
import { ToolbarBase } from "../base-components";
type ToolbarProps<T extends React.ElementType> = PolymorphicWithoutRef<
  T,
  ToolbarOwnProps
>;

type ToolbarElement = <T extends React.ElementType = "div">(
  props: ToolbarProps<T>
) => JSX.Element;

const Toolbar: ToolbarElement = (props) => {
  const { component = "div", ...rest } = props;

  return <ToolbarBase as={component} {...rest} />;
};

export default Toolbar;
