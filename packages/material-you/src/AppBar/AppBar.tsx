import * as React from "react";
import type { AppBarOwnProps, PolymorphicWithRef } from "../types";
import { AppBarBase } from "../base-components";
import Toolbar from "../Toolbar/Toolbar";

type AppBarProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  AppBarOwnProps
>;

type AppBarElement = <T extends React.ElementType = "div">(
  props: AppBarProps<T>
) => React.ReactElement<AppBarProps<T>>;

const AppBarContainer: AppBarElement = React.forwardRef(
  <T extends React.ElementType>(
    props: AppBarProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <AppBarBase as={component} ref={innerRef} {...rest} />;
  }
);

/**
 * AppBar component
 */
const AppBar = Object.assign(AppBarContainer, { Toolbar: Toolbar });

export default AppBar;
