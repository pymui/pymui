import * as React from "react";
import type { CardImageOwnProps, PolymorphicWithRef } from "../types";
import { CardImageBase } from "../base-components";

type CardImageProps<T extends React.ElementType = "img"> = PolymorphicWithRef<
  T,
  CardImageOwnProps
>;
type CardImageElement = <T extends React.ElementType = "img">(
  props: CardImageProps<T>
) => React.ReactElement<CardImageProps<T>>;

const CardImage: CardImageElement = React.forwardRef(
  <T extends React.ElementType = "img">(
    props: CardImageProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <CardImageBase as={component} ref={innerRef} {...rest} />;
  }
);

export default CardImage;
