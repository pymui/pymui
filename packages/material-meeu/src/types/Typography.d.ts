export type HeadlineOwnProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subhead1" | "subhead2";
};
type Size = {
  size?: "large" | "medium" | "small";
};
export type DisplayTypographyOwnProps = {
  variant?: "display1" | "display2" | "display3";
} & Size;

export type BodyTypographyOwnProps = {
  variant?: "body1" | "body2" | "caption" | "overline";
  supportingText?: boolean;
} & Size;

export type TitleTypographyOwnProps = {} & Size;

export type LabelTypographyOwnProps = {} & Size;
