import * as React from "react";
import type { AppBarOwnProps, PolymorphicWithoutRef } from "../types";
import { AppBarBase } from "../base-components";
import Toolbar from "../Toolbar/Toolbar";

type AppBarProps<T extends React.ElementType> = PolymorphicWithoutRef<
  T,
  AppBarOwnProps
>;

type AppBarElement = <T extends React.ElementType = "div">(
  props: AppBarProps<T>
) => JSX.Element;

/**
 * AppBar component
 * * Do all the Component level logic here
 *
 *  ? Should this component forward ref?
 */
const AppBarContainer: AppBarElement = (props) => {
  const { component = "div", ...rest } = props;
  return <AppBarBase as={component} {...rest} />;
};

const AppBar = Object.assign(AppBarContainer, { Toolbar: Toolbar });

export default AppBar;
