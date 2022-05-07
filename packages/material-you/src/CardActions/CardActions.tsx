import * as React from "react";
import type { CardActionsOwnProps, PolymorphicWithRef } from "../types";
import { CardActionsBase } from "../base-components";

type CardActionsProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  CardActionsOwnProps
>;
type CardActionsElement = <T extends React.ElementType = "div">(
  props: CardActionsProps<T>
) => React.ReactElement<CardActionsProps<T>>;

const CardActions: CardActionsElement = React.forwardRef(
  <T extends React.ElementType>(
    props: CardActionsProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <CardActionsBase as={component} ref={innerRef} {...rest} />;
  }
);

export default CardActions;
