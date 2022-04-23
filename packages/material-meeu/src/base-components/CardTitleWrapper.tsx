import styled from "@emotion/styled";
import { useTheme } from "../theme";

const CardTitleWrapper = styled("div", {
  label: "CardTitleWrapper",
})(() => {
  const { theme } = useTheme();
  return {
    marginInline: theme.spacing(2),
  };
});

export default CardTitleWrapper;
