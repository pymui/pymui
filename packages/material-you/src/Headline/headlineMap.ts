import React from "react";

// Mapping of Headlines
type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subhead1"
  | "subhead2";
const headlineMap = (variant: Variant) =>
  new Map<typeof variant, React.ElementType<any>>([
    ["h1", "h1"],
    ["h2", "h2"],
    ["h3", "h3"],
    ["h4", "h4"],
    ["h5", "h5"],
    ["h6", "h6"],
    ["subhead1", "h2"],
    ["subhead2", "h3"],
  ]).get(variant);

export default headlineMap;
