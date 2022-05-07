import type { ListItemOwnProps } from "../types";
import styled from "@emotion/styled";
import { useTheme } from "../theme";

const ListItem = styled("li", {
  label: "ListItem",
})<Partial<ListItemOwnProps>>(({}) => {
  const { theme } = useTheme();
  return {
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(2),
    position: "relative",
    alignItems: "center",
    justifyContent: "flex-start",
    textDecoration: "none",
    boxSizing: "border-box",
    width: "100%",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  };
});

export default ListItem;
