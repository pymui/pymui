type Sides = "top" | "right" | "bottom" | "left";
type Points = "start" | "end";

type Position = `${Sides}-${Points}` | Sides;

export type MenuOwnProps = {
  open: boolean;
  anchorEl: HTMLElement;
  onClose?: () => void;
  placement?: Position;
};
