import * as React from "react";
import type { ListItemOwnProps, PolymorphicWithRef } from "../types";
import { ListItemBase } from "../base-components";
import { ListItemText } from "../ListItemText";

type ListItemProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  ListItemOwnProps
>;

type ListItemElement = <T extends React.ElementType = "li">(
  props: ListItemProps<T>
) => React.ReactElement<ListItemProps<T>>;

const ListItemContainer: ListItemElement = React.forwardRef(
  <T extends React.ElementType>(
    props: ListItemProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <ListItemBase as={component} ref={innerRef} {...rest} />;
  }
);

const ListItem = Object.assign(ListItemContainer, { Text: ListItemText });

export default ListItem;
