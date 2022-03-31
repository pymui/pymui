import * as React from "react";
import type { HeadlineOwnProps, PolymorphicWithRef } from "../types";
import { HeadlineBase } from "../base-components";
import headlineMap from "./headlineMap";

type HeadlineProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  HeadlineOwnProps
>;

type HeadlineElement = <T extends React.ElementType = "h2">(
  props: HeadlineProps<T>
) => React.ReactElement<HeadlineProps<T>>;

const Headline: HeadlineElement = React.forwardRef(
  <T extends React.ElementType>(
    props: HeadlineProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component = headlineMap(props.variant ?? "h2"), ...rest } = props;
    return <HeadlineBase as={component} ref={innerRef} {...rest} />;
  }
);

export default Headline;
