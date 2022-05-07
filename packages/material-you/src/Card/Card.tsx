import * as React from "react";
import type { CardOwnProps, PolymorphicWithRef } from "../types";
import { CardBase } from "../base-components";
import { CardHeader } from "../CardHeader";
import { CardTitle } from "../CardTitle";
import { CardSupportingText } from "../CardSupportingText";
import { CardActions } from "../CardActions";
import { CardImage } from "../CardImage";
import { CardContent } from "../CardContent";

// TODO: Add width property to Card

type CardProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  CardOwnProps
>;

type CardElement = <T extends React.ElementType = "div">(
  props: CardProps<T>
) => React.ReactElement<CardProps<T>>;

const CardContainer: CardElement = React.forwardRef(
  <T extends React.ElementType = "div">(
    props: CardProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, ...rest } = props;
    return <CardBase as={component} ref={innerRef} {...rest} />;
  }
);
/**
 * Card component.
 * - A card is identifiable as a single unit.
 * - A card can hold anything from images to headlines, supporting text, buttons, lists and other components.
 * - A card's layout and dimensions depends on its content. There is no one right way to make a card.
 */
const Card = Object.assign(CardContainer, {
  Header: CardHeader,
  Title: CardTitle,
  SupportingText: CardSupportingText,
  Actions: CardActions,
  Image: CardImage,
  Content: CardContent,
});

export default Card;
