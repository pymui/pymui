import * as React from "react";
import type { PolymorphicWithRef } from "../types";
import BaseDrawerItems from "./BaseDrawerItems";
import { DrawerItem } from "../DrawerItem";

type Props = {
  label: React.ComponentProps<typeof DrawerItem.Label> & {
    [`data-label`]?: string;
  };
  icon: React.ComponentProps<typeof DrawerItem.Icon> & {
    [`data-icon`]?: string;
  };
};
type DrawerItemsProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  {
    children: (Item: typeof DrawerItem, props: Props) => React.ReactNode;
  }
>;
type DrawerItemsElement = <E extends React.ElementType = "ul">(
  props: DrawerItemsProps<E>
) => React.ReactElement<DrawerItemsProps<E>>;

const DrawerItems: DrawerItemsElement = React.forwardRef(
  <T extends React.ElementType>(
    props: DrawerItemsProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component = "ul", children, ...rest } = props;
    return (
      <BaseDrawerItems
        as={component as typeof component}
        ref={innerRef}
        {...rest}
      >
        {children(DrawerItem, {
          label: {
            component: "span",
            size: "large",
            ["data-label"]: "drawer",
          },
          icon: { ["data-icon"]: "drawer" },
        })}
      </BaseDrawerItems>
    );
  }
);

export default DrawerItems;
