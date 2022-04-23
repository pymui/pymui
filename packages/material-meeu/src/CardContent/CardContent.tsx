import * as React from "react";
import type { CardContentOwnProps } from "./types";
import type { PolymorphicWithRef } from "../types";
import CardContentBase from "./CardContentBase";

type CardContentProps<T extends React.ElementType = "div"> = PolymorphicWithRef<
  T,
  CardContentOwnProps
>;
type CardContentElement = <T extends React.ElementType = "div">(
  props: CardContentProps<T>
) => React.ReactElement<CardContentProps<T>>;

const CardContent: CardContentElement = React.forwardRef(
  <T extends React.ElementType = "div">(
    props: CardContentProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <CardContentBase as={component} ref={innerRef} {...rest} />;
  }
);

export default CardContent;
