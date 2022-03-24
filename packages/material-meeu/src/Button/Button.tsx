import * as React from "react";
import type { PolymorphicWithRef, ButtonOwnProps } from "../types";
import { ButtonBase } from "../base-components";

type ButtonProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  ButtonOwnProps
>;

type ButtonElement = <T extends React.ElementType = "button">(
  props: ButtonProps<T>
) => JSX.Element;

const Button = React.forwardRef(
  <T extends React.ElementType>(
    props: ButtonProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <ButtonBase component={component} ref={innerRef} {...rest} />;
  }
) as ButtonElement;

export default Button;
