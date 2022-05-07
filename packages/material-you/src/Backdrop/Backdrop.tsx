import * as React from "react";
import type { BackdropOwnProps, PolymorphicWithRef } from "../types";
import { BackdropBase } from "../base-components";

type BackdropProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  BackdropOwnProps
>;

type BackdropElement = <T extends React.ElementType>(
  props: BackdropProps<T>
) => React.ReactElement<BackdropProps<T>>;

const Backdrop: BackdropElement = React.forwardRef(
  <T extends React.ElementType = "div">(
    props: BackdropProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <BackdropBase as={component} ref={innerRef} {...rest} />;
  }
);

export default Backdrop;
