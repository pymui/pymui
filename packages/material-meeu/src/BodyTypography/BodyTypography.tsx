import * as React from "react";
import type { BodyTypographyOwnProps, PolymorphicWithRef } from "../types";
import { BodyTypographyBase } from "../base-components";

type BodyTypographyProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  BodyTypographyOwnProps
>;

type BodyTypographyElement = <T extends React.ElementType = "p">(
  props: BodyTypographyProps<T>
) => React.ReactElement<BodyTypographyProps<T>>;

const BodyTypography: BodyTypographyElement = React.forwardRef(
  <T extends React.ElementType>(
    props: BodyTypographyProps<T>,
    ref: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <BodyTypographyBase as={component} ref={ref} {...rest} />;
  }
);

export default BodyTypography;
