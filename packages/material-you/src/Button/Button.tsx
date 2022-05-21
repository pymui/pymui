import * as React from "react";
import type { PolymorphicWithRef, ButtonOwnProps } from "../types";
import { ButtonBase } from "../base-components";
import { useEventListener } from "../hooks";
import rippleEvent from "../utils/events/rippleEffect";

type ButtonProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  ButtonOwnProps
>;

type ButtonElement = <T extends React.ElementType = "button">(
  props: ButtonProps<T>
) => React.ReactElement<ButtonProps<T>>;

const Button: ButtonElement = React.forwardRef(
  <T extends React.ElementType>(
    props: ButtonProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    // forwarding the ref using imperative API
    React.useImperativeHandle(innerRef, () => buttonRef.current);
    // useEventListener to add ripple effect
    useEventListener(
      "mousedown",
      (event) => rippleEvent(event, buttonRef),
      buttonRef
    );
    return <ButtonBase as={component} ref={buttonRef} {...rest} />;
  }
);

export default Button;
