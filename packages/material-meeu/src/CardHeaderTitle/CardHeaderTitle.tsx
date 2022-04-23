import * as React from "react";
import type { PolymorphicWithRef } from "../types";
import { CardHeaderTitleBase } from "../base-components";

type CardHeaderTitleProps<T extends React.ElementType = "div"> =
  PolymorphicWithRef<T, {}>;

type CardHeaderTitleElement = <T extends React.ElementType = "div">(
  props: CardHeaderTitleProps<T>
) => React.ReactElement<CardHeaderTitleProps<T>>;

const CardHeaderTitle: CardHeaderTitleElement = React.forwardRef(
  <T extends React.ElementType = "div">(
    props: CardHeaderTitleProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <CardHeaderTitleBase as={component} ref={innerRef} {...rest} />;
  }
);

export default CardHeaderTitle;
