import type { PolymorphicWithoutRef } from "./PolymorphicWithoutRef";

type Width = "sm" | "md" | "lg" | "xl";

export type ContainerOwnProps = {
  /**
   * **Sets the max Width of the Container.** \
   *  By default it sets to `lg`
   */
  maxWidth?: Width;
};
