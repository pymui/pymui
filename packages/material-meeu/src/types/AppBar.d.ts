type ElevationLevel = 1 | 2 | 3 | 4 | 5;

export type AppBarOwnProps =
  | { variant?: "standard"; position?: "fixed" }
  | {
      /**
       * Elevated AppBar variant.
       */
      variant: "elevated";

      /**
       * The Elevation level of the AppBar. Ranging from 0-5.
       *
       * Default is set to 1.
       */
      elevation?: ElevationLevel;
    };
