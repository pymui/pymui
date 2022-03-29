export type SurfaceOwnProps =
  | {
      // variant?: "elevated" | "outlined" | "flat";
      // corner?: "rounded" | "square";
    }
  | ({
      variant: "elevated";
      elevation: number;
    } & { corner: "rounded"; radius: number })
  | ({
      variant: "flat";
    } & { corner: "rounded"; radius: number });
