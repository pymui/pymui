import * as React from "react";
import type { SurfaceOwnProps, PolymorphicWithoutRef } from "../types";
import { SurfaceBase } from "../base-components";
type SurfaceProps<T extends React.ElementType> = PolymorphicWithoutRef<
  T,
  SurfaceOwnProps
>;

type SurfaceElement = <T extends React.ElementType = "div">(
  props: SurfaceProps<T>
) => JSX.Element;

const Surface: SurfaceElement = (props) => {
  const { component = "div", ...rest } = props;
  return <SurfaceBase as={component} {...rest} />;
};

export default Surface;
