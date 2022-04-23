/**
 * Card component.
 * - A card is identifiable as a single unit.
 * - A card can hold anything from images to headlines, supporting text, buttons, lists and other components.
 * - A card's layout and dimensions depends on its content. There is no one right way to make a card.
 */

export type CardOwnProps = {
  variant?: "outlined" | "filled" | "elevated";
  shape?: "rounded" | "square";
  elevation?: number;
  radius?: number;
};

export type CardHeaderOwnProps = {};

export type CardHeaderAvatarOwnProps = {};
export type CardHeaderTitleOwnProps = {};
export type CardHeaderSubtitleOwnProps = {};
export type CardHeaderActionOwnProps = {};

export type CardActionsOwnProps = {
  placeItems?: "center" | "start" | "end";
};

export type CardImageOwnProps = {
  src: string;
  alt: string;
  title?: string;
  height: number;
  width: number;
  objectFit?: "cover" | "contain" | "fill" | "inside" | "outside";
  objectPosition?: "top" | "bottom" | "center" | "left" | "right";
  shape?: "rounded" | "square";
};
