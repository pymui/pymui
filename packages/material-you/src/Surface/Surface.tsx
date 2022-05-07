import * as React from "react";
import type { SurfaceOwnProps, PolymorphicWithRef } from "../types";
import { SurfaceBase } from "../base-components";

type SurfaceProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  SurfaceOwnProps
>;

type SurfaceElement = <T extends React.ElementType = "div">(
  props: SurfaceProps<T>
) => React.ReactElement<SurfaceProps<T>>;

const Surface: SurfaceElement = React.forwardRef(
  <T extends React.ElementType>(
    props: SurfaceProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <SurfaceBase as={component} ref={innerRef} {...rest} />;
  }
);

export default Surface;
