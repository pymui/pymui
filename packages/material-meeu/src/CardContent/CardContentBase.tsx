import type { CardContentOwnProps } from "./types";
import styled from "@emotion/styled";
import { useTheme } from "../theme";

const CardContentBase = styled("div", {
  label: "card-content",
})<Partial<CardContentOwnProps>>(function Base() {
  const { theme } = useTheme();
  return {
    marginInline: theme.spacing(2),
    marginBlock: theme.spacing(2),
  };
});

export default CardContentBase;
