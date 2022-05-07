import type { CardHeaderOwnProps } from "../types";
import styled from "@emotion/styled";
import { useTheme } from "../theme";

const CardHeader = styled("div", {
  label: "CardHeader",
})<Partial<CardHeaderOwnProps>>(({}) => {
  const { theme } = useTheme();
  return {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "auto 1fr auto",
    alignItems: "center",
    // gap: theme.spacing(1),
    paddingInline: theme.spacing(2),
    marginBlock: theme.spacing(1),
  };
});

export default CardHeader;
