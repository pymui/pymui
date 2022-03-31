import * as React from "react";
import type { DisplayTypographyOwnProps, PolymorphicWithRef } from "../types";
import { DisplayTypographyBase } from "../base-components";

type DisplayTypographyProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  DisplayTypographyOwnProps
>;

type DisplayTypographyElement = <T extends React.ElementType = "h2">(
  props: DisplayTypographyProps<T>
) => React.ReactElement<DisplayTypographyProps<T>>;

const DisplayTypography: DisplayTypographyElement = React.forwardRef(
  <T extends React.ElementType>(
    props: DisplayTypographyProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <DisplayTypographyBase as={component} ref={innerRef} {...rest} />;
  }
);

export default DisplayTypography;
