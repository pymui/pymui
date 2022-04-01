import type { ListOwnProps } from "../types";
import styled from "@emotion/styled";

const List = styled("ul", {
  label: "List",
})<Partial<ListOwnProps>>(({}) => {
  return {
    listStyleType: "none",
  };
});

export default List;
