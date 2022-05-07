import styled from "@emotion/styled";
import { useTheme } from "../theme";

const CardHeaderWrapper = styled("div", {
  label: "CardHeaderWrapper",
})(() => {
  const { theme } = useTheme();
  return {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "auto 1fr auto",
    columnGap: theme.spacing(2),
    marginInline: theme.spacing(2),
    marginBlock: theme.spacing(1),
  };
});

export default CardHeaderWrapper;
