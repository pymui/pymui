import { IGridItem } from "../types";
import styled, { CSSObject } from "@emotion/styled";
import { useMemo } from "react";
import { useTheme } from "../theme";

const getScreen = (value: number) =>
  `@media screen and (min-width: ${value}px)`;

const GridItem = styled("div", {
  label: "gridItem",
})<Partial<IGridItem>>(({ xs, sm, md, lg, xl }) => {
  const { theme } = useTheme();
  const _xs = useMemo(
    () =>
      new Map<typeof xs, CSSObject>([
        [1, { gridColumn: "span 1" }],
        [2, { gridColumn: "span 2" }],
        [3, { gridColumn: "span 3" }],
        [4, { gridColumn: "span 4" }],
        [5, { gridColumn: "span 5" }],
        [6, { gridColumn: "span 6" }],
        [7, { gridColumn: "span 7" }],
        [8, { gridColumn: "span 8" }],
        [9, { gridColumn: "span 9" }],
        [10, { gridColumn: "span 10" }],
        [11, { gridColumn: "span 11" }],
        [12, { gridColumn: "span 12" }],
      ]),
    [xs]
  ).get(xs) as CSSObject;
  //
  const _sm = useMemo(
    () =>
      new Map<typeof sm | undefined, CSSObject>([
        [
          1,
          {
            [getScreen(theme.breakPoints.points("sm"))]: {
              gridColumn: "span 1",
            },
          },
        ],
        [
          2,
          {
            [getScreen(theme.breakPoints.points("sm"))]: {
              gridColumn: "span 2",
            },
          },
        ],
        [
          3,
          {
            [getScreen(theme.breakPoints.points("sm"))]: {
              gridColumn: "span 3",
            },
          },
        ],
        [
          4,
          {
            [getScreen(theme.breakPoints.points("sm"))]: {
              gridColumn: "span 4",
            },
          },
        ],
        [
          5,
          {
            [getScreen(theme.breakPoints.points("sm"))]: {
              gridColumn: "span 5",
            },
          },
        ],
        [
          6,
          {
            [getScreen(theme.breakPoints.points("sm"))]: {
              gridColumn: "span 6",
            },
          },
        ],
        [
          7,
          {
            [getScreen(theme.breakPoints.points("sm"))]: {
              gridColumn: "span 7",
            },
          },
        ],
        [
          8,
          {
            [getScreen(theme.breakPoints.points("sm"))]: {
              gridColumn: "span 8",
            },
          },
        ],
        [
          9,
          {
            [getScreen(theme.breakPoints.points("sm"))]: {
              gridColumn: "span 9",
            },
          },
        ],
        [
          10,
          {
            [getScreen(theme.breakPoints.points("sm"))]: {
              gridColumn: "span 10",
            },
          },
        ],
        [
          11,
          {
            [getScreen(theme.breakPoints.points("sm"))]: {
              gridColumn: "span 11",
            },
          },
        ],
        [
          12,
          {
            [getScreen(theme.breakPoints.points("sm"))]: {
              gridColumn: "span 12",
            },
          },
        ],
        [undefined, {}],
      ]),
    [sm]
  ).get(sm) as CSSObject;
  // md
  const _md = useMemo(
    () =>
      new Map<typeof md, CSSObject>([
        [
          1,
          {
            [getScreen(theme.breakPoints.points("md"))]: {
              gridColumn: "span 1",
            },
          },
        ],
        [
          2,
          {
            [getScreen(theme.breakPoints.points("md"))]: {
              gridColumn: "span 2",
            },
          },
        ],
        [
          3,
          {
            [getScreen(theme.breakPoints.points("md"))]: {
              gridColumn: "span 3",
            },
          },
        ],
        [
          4,
          {
            [getScreen(theme.breakPoints.points("md"))]: {
              gridColumn: "span 4",
            },
          },
        ],
        [
          5,
          {
            [getScreen(theme.breakPoints.points("md"))]: {
              gridColumn: "span 5",
            },
          },
        ],
        [
          6,
          {
            [getScreen(theme.breakPoints.points("md"))]: {
              gridColumn: "span 6",
            },
          },
        ],
        [
          7,
          {
            [getScreen(theme.breakPoints.points("md"))]: {
              gridColumn: "span 7",
            },
          },
        ],
        [
          8,
          {
            [getScreen(theme.breakPoints.points("md"))]: {
              gridColumn: "span 8",
            },
          },
        ],
        [
          9,
          {
            [getScreen(theme.breakPoints.points("md"))]: {
              gridColumn: "span 9",
            },
          },
        ],
        [
          10,
          {
            [getScreen(theme.breakPoints.points("md"))]: {
              gridColumn: "span 10",
            },
          },
        ],
        [
          11,
          {
            [getScreen(theme.breakPoints.points("md"))]: {
              gridColumn: "span 11",
            },
          },
        ],
        [
          12,
          {
            [getScreen(theme.breakPoints.points("md"))]: {
              gridColumn: "span 12",
            },
          },
        ],
        [undefined, {}],
      ]),
    [md]
  ).get(md) as CSSObject;
  // lg
  const _lg = useMemo(
    () =>
      new Map<typeof lg, CSSObject>([
        [
          1,
          {
            [getScreen(theme.breakPoints.points("lg"))]: {
              gridColumn: "span 1",
            },
          },
        ],
        [
          2,
          {
            [getScreen(theme.breakPoints.points("lg"))]: {
              gridColumn: "span 2",
            },
          },
        ],
        [
          3,
          {
            [getScreen(theme.breakPoints.points("lg"))]: {
              gridColumn: "span 3",
            },
          },
        ],
        [
          4,
          {
            [getScreen(theme.breakPoints.points("lg"))]: {
              gridColumn: "span 4",
            },
          },
        ],
        [
          5,
          {
            [getScreen(theme.breakPoints.points("lg"))]: {
              gridColumn: "span 5",
            },
          },
        ],
        [
          6,
          {
            [getScreen(theme.breakPoints.points("lg"))]: {
              gridColumn: "span 6",
            },
          },
        ],
        [
          7,
          {
            [getScreen(theme.breakPoints.points("lg"))]: {
              gridColumn: "span 7",
            },
          },
        ],
        [
          8,
          {
            [getScreen(theme.breakPoints.points("lg"))]: {
              gridColumn: "span 8",
            },
          },
        ],
        [
          9,
          {
            [getScreen(theme.breakPoints.points("lg"))]: {
              gridColumn: "span 9",
            },
          },
        ],
        [
          10,
          {
            [getScreen(theme.breakPoints.points("lg"))]: {
              gridColumn: "span 10",
            },
          },
        ],
        [
          11,
          {
            [getScreen(theme.breakPoints.points("lg"))]: {
              gridColumn: "span 11",
            },
          },
        ],
        [
          12,
          {
            [getScreen(theme.breakPoints.points("lg"))]: {
              gridColumn: "span 12",
            },
          },
        ],
        [undefined, {}],
      ]),
    [lg]
  ).get(lg) as CSSObject;
  // xl
  const _xl = useMemo(
    () =>
      new Map<typeof xl, CSSObject>([
        [
          1,
          {
            [getScreen(theme.breakPoints.points("xl"))]: {
              gridColumn: "span 1",
            },
          },
        ],
        [
          2,
          {
            [getScreen(theme.breakPoints.points("xl"))]: {
              gridColumn: "span 2",
            },
          },
        ],
        [
          3,
          {
            [getScreen(theme.breakPoints.points("xl"))]: {
              gridColumn: "span 3",
            },
          },
        ],
        [
          4,
          {
            [getScreen(theme.breakPoints.points("xl"))]: {
              gridColumn: "span 4",
            },
          },
        ],
        [
          5,
          {
            [getScreen(theme.breakPoints.points("xl"))]: {
              gridColumn: "span 5",
            },
          },
        ],
        [
          6,
          {
            [getScreen(theme.breakPoints.points("xl"))]: {
              gridColumn: "span 6",
            },
          },
        ],
        [
          7,
          {
            [getScreen(theme.breakPoints.points("xl"))]: {
              gridColumn: "span 7",
            },
          },
        ],
        [
          8,
          {
            [getScreen(theme.breakPoints.points("xl"))]: {
              gridColumn: "span 8",
            },
          },
        ],
        [
          9,
          {
            [getScreen(theme.breakPoints.points("xl"))]: {
              gridColumn: "span 9",
            },
          },
        ],
        [
          10,
          {
            [getScreen(theme.breakPoints.points("xl"))]: {
              gridColumn: "span 10",
            },
          },
        ],
        [
          11,
          {
            [getScreen(theme.breakPoints.points("xl"))]: {
              gridColumn: "span 11",
            },
          },
        ],
        [
          12,
          {
            [getScreen(theme.breakPoints.points("xl"))]: {
              gridColumn: "span 12",
            },
          },
        ],
        [undefined, {}],
      ]),
    [xl]
  ).get(xl) as CSSObject;
  return Object.assign({}, _xs, _sm, _md, _lg, _xl) as CSSObject;
});

GridItem.defaultProps = {
  xs: 12,
};

export default GridItem;
