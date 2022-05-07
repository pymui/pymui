import * as React from "react";
import type { PolymorphicWithRef } from "../types";
import { CardHeaderSubtitleBase } from "../base-components";

type CardHeaderSubtitleProps<T extends React.ElementType = "div"> =
  PolymorphicWithRef<T, {}>;

type CardHeaderSubtitleElement = <T extends React.ElementType = "div">(
  props: CardHeaderSubtitleProps<T>
) => React.ReactElement<CardHeaderSubtitleProps<T>>;

const CardHeaderSubtitle: CardHeaderSubtitleElement = React.forwardRef(
  <T extends React.ElementType = "div">(
    props: CardHeaderSubtitleProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <CardHeaderSubtitleBase as={component} ref={innerRef} {...rest} />;
  }
);

export default CardHeaderSubtitle;
