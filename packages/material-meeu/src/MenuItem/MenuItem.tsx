import * as React from "react";
import type { MenuItemOwnProps } from "./type";
import type { PolymorphicWithRef } from "../types";
import MenuItemBase from "./MenuItemBase";
import { BodyTypography } from "../BodyTypography";
import { Icon } from "../Icon";

type MenuItemProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  MenuItemOwnProps
>;

type MenuItemElement = <T extends React.ElementType = "div">(
  props: MenuItemProps<T>
) => React.ReactElement<MenuItemProps<T>>;

const MenuItem: MenuItemElement = React.forwardRef(
  <T extends React.ElementType>(
    props: MenuItemProps<T>,
    innerRef: typeof props.ref
  ) => {
    const {
      component = "div",
      label,
      leadingIcon,
      trailingIcon,
      trailingText,
      ...rest
    } = props;
    return <MenuItemBase as={component} ref={innerRef} {...rest} />;
  }
);

export default Object.assign(MenuItem, {
  Icon: Icon,
  Label: BodyTypography,
});
