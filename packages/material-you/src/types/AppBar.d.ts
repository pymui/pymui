type ElevationLevel = 1 | 2 | 3 | 4 | 5;

export type AppBarOwnProps = {
  variant?: "standard" | "elevated";

  /**
   * Elevation level of the Elevated AppBar.
   *
   * Elevation Level: **1-5**
   */
  elevation?: ElevationLevel;

  /**
   * Color of the background.
   * TODO: Add support for below colors.
   * - primary
   * - secondary
   * - tertiary
   * - inherit
   * - transparent
   */
  color?: "primary" | "secondary" | "tertiary" | "inherit" | "transparent";
};
