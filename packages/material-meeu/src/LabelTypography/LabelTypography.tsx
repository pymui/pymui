import * as React from "react";
import type { LabelTypographyOwnProps, PolymorphicWithRef } from "../types";
import { LabelTypographyBase } from "../base-components";

type LabelTypographyProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  LabelTypographyOwnProps
>;

type LabelTypographyElement = <T extends React.ElementType = "span">(
  props: LabelTypographyProps<T>
) => React.ReactElement<LabelTypographyProps<T>>;

const LabelTypography: LabelTypographyElement = React.forwardRef(
  <T extends React.ElementType>(
    props: LabelTypographyProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <LabelTypographyBase as={component} ref={innerRef} {...rest} />;
  }
);

export default LabelTypography;
