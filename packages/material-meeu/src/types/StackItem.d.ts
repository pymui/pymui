export type StackItemOwnProps = {
  /**
   * Display order of the Stack Item.
   */
  order?: number;
  /**
   * Defines how much the Stack Item should grow.
   */
  grow?: number;
  /**
   * Defines how much the Stack Item should shrink.
   */
  shrink?: number;

  /**
   * Defines the initial size of the Stack Item, before any available space is distributed.
   */
  basis?: string;

  /**
   * Defines the alignment along the main axis.
   */
  align?:
    | "auto"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "baseline"
    | "initial"
    | "inherit";
};
