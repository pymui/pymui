import type { ListOwnProps } from "../types";
import styled, { CSSObject } from "@emotion/styled";
import { useTheme } from "../theme";
import { useMemo } from "react";

const List = styled("ul", {
  label: "List",
})<Partial<ListOwnProps>>(({ dense, disablePadding }) => {
  const { theme } = useTheme();
  const _dense = useMemo(
    () =>
      new Map<typeof dense, CSSObject>([
        [
          true,
          {
            marginBlockStart: theme.spacing(0.5),
            marginBlockEnd: theme.spacing(0.5),
          },
        ],
        [undefined, {}],
      ]),
    [dense]
  ).get(dense);
  const _disablePadding = useMemo(
    () =>
      new Map<typeof disablePadding, CSSObject>([
        [
          true,
          {
            paddingInlineEnd: 0,
            paddingInlineStart: 0,
          },
        ],
        [undefined, {}],
      ]),
    [disablePadding]
  ).get(disablePadding);
  return Object.assign(
    {
      listStyleType: "none",
      paddingInlineEnd: 0,
      paddlingInlineStart: theme.spacing(2),
      marginBlockStart: theme.spacing(0),
      marginBlockEnd: theme.spacing(2),
    },
    _dense,
    _disablePadding
  );
});

export default List;
