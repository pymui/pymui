import { ReactNode } from "react";

export type CardTitleOwnProps = {
  renderTitle?: (Title: ReactNode) => React.ReactNode;
  renderSubtitle?: (Subtitle: ReactNode) => React.ReactNode;
};
