type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GridItemOwnProps = {
  /**
   * The number of columns to span on extra small devices (0px).
   */
  xs?: Column;
  /**
   * The number of columns to span on small devices (600px)
   */
  sm?: Column;
  /**
   * The number of columns to span on medium devices (905px)
   */
  md?: Column;
  /**
   * The number of columns to span on large devices (1240px)
   */
  lg?: Column;
  /**
   * The number of columns to span on extra large devices (1440px)
   */
  xl?: Column;
};
