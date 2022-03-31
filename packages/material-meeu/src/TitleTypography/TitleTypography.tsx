import * as React from "react";
import type { TitleTypographyOwnProps, PolymorphicWithRef } from "../types";
import { TitleTypographyBase } from "../base-components";

type TitleTypographyProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  TitleTypographyOwnProps
>;

type TitleTypographyElement = <T extends React.ElementType = "h2">(
  props: TitleTypographyProps<T>
) => React.ReactElement<TitleTypographyProps<T>>;

const TitleTypography: TitleTypographyElement = React.forwardRef(
  <T extends React.ElementType>(
    props: TitleTypographyProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <TitleTypographyBase as={component} ref={innerRef} {...rest} />;
  }
);

export default TitleTypography;
