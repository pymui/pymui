import styled from "@emotion/styled";
import type { CardTitleOwnProps } from "../types";

const CardTitle = styled("h2", {
  label: "CardTitle",
})<Partial<CardTitleOwnProps>>(() => {
  return {};
});

export default CardTitle;
