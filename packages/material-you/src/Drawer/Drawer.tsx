import * as React from "react";
import type { DrawerOwnProps } from "./types";
import type { PolymorphicWithRef } from "../types";
import DrawerBase from "./DrawerBase";
import { DrawerItems } from "../DrawerItems";

type DrawerProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  DrawerOwnProps
>;

type DrawerElement = <E extends React.ElementType = "nav">(
  props: DrawerProps<E>
) => React.ReactElement<DrawerProps<E>>;

const Drawer: DrawerElement = React.forwardRef(
  <T extends React.ElementType>(
    props: DrawerProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component = "nav", ...rest } = props;
    return (
      <DrawerBase as={component as typeof component} ref={innerRef} {...rest} />
    );
  }
);

export default Object.assign(Drawer, {
  Items: DrawerItems,
});
