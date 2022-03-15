import { ButtonBase, IButton } from "../base-components";
import type { ElementProps } from "../types";

type ButtonProps = ElementProps<HTMLButtonElement, IButton>;

const Button: ButtonProps = (props) => {
  const component = props.component ?? "button";
  return <ButtonBase variant="default" as={component} {...props} />;
};

export default Button;
