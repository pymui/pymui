import * as React from "react";
import type { ListItemTextOwnProps, PolymorphicWithRef } from "../types";
import { ListItemTextBase } from "../base-components";

type ListItemTextProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  ListItemTextOwnProps
>;

type ListItemTextElement = <T extends React.ElementType = "span">(
  props: ListItemTextProps<T>
) => React.ReactElement<ListItemTextProps<T>>;

const ListItemText: ListItemTextElement = React.forwardRef(
  <T extends React.ElementType = "span">(
    props: ListItemTextProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <ListItemTextBase as={component} ref={innerRef} {...rest} />;
  }
);

export default ListItemText;
