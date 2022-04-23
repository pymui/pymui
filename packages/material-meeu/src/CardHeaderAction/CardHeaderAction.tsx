import * as React from "react";
import type { PolymorphicWithRef } from "../types";
import { CardHeaderActionBase } from "../base-components";

type CardHeaderActionProps<T extends React.ElementType = "div"> =
  PolymorphicWithRef<T, {}>;
type CardHeaderActionElement = <T extends React.ElementType = "div">(
  props: CardHeaderActionProps<T>
) => React.ReactElement<CardHeaderActionProps<T>>;

const CardHeaderAction: CardHeaderActionElement = React.forwardRef(
  <T extends React.ElementType = "div">(
    props: CardHeaderActionProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <CardHeaderActionBase as={component} ref={innerRef} {...rest} />;
  }
);

export default CardHeaderAction;
