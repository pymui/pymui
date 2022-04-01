import type { BackdropOwnProps } from "../types";
import styled, { CSSObject } from "@emotion/styled";
import { useMemo } from "react";
import { useTheme } from "../theme";

const Backdrop = styled("div", {
  label: "Backdrop",
})<Partial<BackdropOwnProps>>(({ open }) => {
  const { type } = useTheme();
  const _open = useMemo(
    () =>
      new Map<typeof open, CSSObject>([
        [
          true,
          {
            display: "grid",
            placeItems: "center",
            opacity: 1,
            transition: "opacity 0.25s 0s ease-in",
            ...new Map<typeof type, CSSObject>([
              [
                "light",
                {
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(4px)",
                },
              ],
              [
                "dark",
                {
                  background: "rgba(255, 255, 255, 0.35)",
                  // ? Do I need box-shadow here?
                  // boxShadow: "0 8px 32px rgba(31,38,135,0.37)",
                  backdropFilter: "blur(4px)",
                },
              ],
            ]).get(type),
          },
        ],
        [false, { display: "none" }],
      ]),
    [open, type]
  ).get(open);
  return Object.assign(
    {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "none",
      opacity: 0,
    },
    _open
  );
});

export default Backdrop;
