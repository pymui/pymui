import * as React from "react";
import type { CardHeaderAvatarOwnProps, PolymorphicWithRef } from "../types";
import { CardHeaderAvatarBase } from "../base-components";

type CardHeaderAvatarProps<T extends React.ElementType = "div"> =
  PolymorphicWithRef<T, CardHeaderAvatarOwnProps>;

type CardHeaderAvatarElement = <T extends React.ElementType = "div">(
  props: CardHeaderAvatarProps<T>
) => React.ReactElement<CardHeaderAvatarProps<T>>;

const CardHeaderAvatar: CardHeaderAvatarElement = React.forwardRef(
  <T extends React.ElementType = "div">(
    props: CardHeaderAvatarProps<T>,
    innerRef: typeof props.ref
  ): React.ReactElement<CardHeaderAvatarProps<T>> => {
    const { component, ...rest } = props;

    return <CardHeaderAvatarBase as={component} ref={innerRef} {...rest} />;
  }
);

export default CardHeaderAvatar;
