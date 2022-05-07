import * as React from "react";
import type { ListOwnProps, PolymorphicWithRef } from "../types";
import { ListBase } from "../base-components";
import { ListItem } from "../ListItem";

type ListProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  ListOwnProps
>;

type ListElement = <T extends React.ElementType = "ul">(
  props: ListProps<T>
) => React.ReactElement<ListProps<T>>;

const ListContainer: ListElement = React.forwardRef(
  <T extends React.ElementType>(
    props: ListProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <ListBase as={component} ref={innerRef} {...rest} />;
  }
);

const List = Object.assign(ListContainer, { Item: ListItem });

export default List;
