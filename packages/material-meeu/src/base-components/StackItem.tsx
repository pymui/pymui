import type { StackItemOwnProps } from "../types";
import styled from "@emotion/styled";

const StackItem = styled("div", {
  label: "StackItem",
})<StackItemOwnProps>(({ order, grow, shrink, basis, align }) => {
  return {
    order: order ?? 0,
    flexGrow: grow ?? 0,
    flexShrink: shrink ?? 0,
    flexBasis: basis ?? "auto",
    alignSelf: align ?? "auto",
  };
});

export default StackItem;
