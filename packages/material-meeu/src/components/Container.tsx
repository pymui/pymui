import { FC } from "react";
import { IComponent } from "../types";
import { ContainerBase } from "../base-components";

type BaseProps = React.ComponentProps<typeof ContainerBase>;
type ContainerProps = Omit<BaseProps, "as" | "theme"> &
  IComponent &
  React.ComponentPropsWithoutRef<"div">;

/**
 * **A Container is used to contain elements inside a specific width.** \
 * By default the maxWidth set to `lg` (1240px)
 */
const Container: FC<ContainerProps> = (props) => {
  const component = props.component ?? "div";
  return <ContainerBase as={component} {...props} />;
};

export default Container;
