import * as React from "react";
import type { DrawerItemOwnProps } from "./types";
import type { PolymorphicWithRef } from "../types";
import BaseDrawerItem from "./BaseDrawerItem";
import { LabelTypography } from "../LabelTypography";
import { Icon } from "../Icon";
import { useEventListener } from "../hooks";
import rippleEffect from "../utils/events/rippleEffect";

type LabelProps = React.ComponentProps<typeof LabelTypography> & {
  labelText?: string;
};

type DrawerItemProps<T extends React.ElementType = "li"> = PolymorphicWithRef<
  T,
  DrawerItemOwnProps
>;
type DrawerItemElement = <T extends React.ElementType = "li">(
  props: DrawerItemProps<T>
) => React.ReactElement<DrawerItemProps<T>>;

const DrawerItem: DrawerItemElement = React.forwardRef(
  <T extends React.ElementType = "li">(
    props: DrawerItemProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component = "li", ...rest } = props;
    const itemRef = React.useRef(null);
    // forwarding the ref using imperative API
    React.useImperativeHandle(innerRef, () => itemRef.current);

    // useEventListener to add ripple effect
    useEventListener(
      "mousedown",
      (event) => rippleEffect(event, itemRef),
      itemRef
    );
    return <BaseDrawerItem as={component} ref={itemRef} {...rest} />;
  }
);

export default Object.assign(DrawerItem, {
  Label: (props: LabelProps) =>
    React.cloneElement(<LabelTypography />, props, [props.labelText]),
  Icon: Icon,
});
