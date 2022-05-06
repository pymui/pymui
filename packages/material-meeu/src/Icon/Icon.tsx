import * as React from "react";
import type { IconOwnProps } from "./types";
import type { PolymorphicWithRef } from "../types";
import IconBase from "./IconBase";

type IconProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  IconOwnProps
>;

type IconElement = <
  T extends React.ElementType = React.ElementType<HTMLDivElement>
>(
  props: IconProps<T>
) => React.ReactElement<IconProps<T>>;

const Icon: IconElement = React.forwardRef(
  <T extends React.ElementType = React.ElementType<HTMLDivElement>>(
    props: IconProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <IconBase as={component} {...rest} ref={innerRef} />;
  }
);

export default Icon;
