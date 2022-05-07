import * as React from "react";
import type { CardHeaderOwnProps, PolymorphicWithRef } from "../types";
import CardHeaderWrapper from "./CardHeaderWrapper";
import { CardHeaderAvatar } from "../CardHeaderAvatar";
import { CardHeaderAction } from "../CardHeaderAction";
import { BodyTypography } from "../BodyTypography";
import { TitleTypography } from "../TitleTypography";

type CardHeaderProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  CardHeaderOwnProps & {
    renderHeadline: (
      Headline: typeof TitleTypography & {
        Headline: typeof TitleTypography;
        Subhead: typeof BodyTypography;
      },
      headlineProps: React.ComponentProps<typeof TitleTypography>,
      subheadProps: React.ComponentProps<typeof BodyTypography>
    ) => React.ReactElement;
    renderSubhead?: (
      Subhead: typeof BodyTypography,
      props: React.ComponentProps<typeof BodyTypography>
    ) => React.ReactElement;
    renderAction?: (
      Action: typeof CardHeaderAction,
      props: React.ComponentProps<typeof CardHeaderAction>
    ) => React.ReactElement;
    renderAvatar?: (
      Avatar: typeof CardHeaderAvatar,
      props: React.ComponentProps<typeof CardHeaderAvatar>
    ) => React.ReactElement;
  }
>;

type CardHeaderElement = <T extends React.ElementType = "div">(
  props: CardHeaderProps<T>
) => React.ReactElement<CardHeaderProps<T>>;

const CardHeader: CardHeaderElement = React.forwardRef(
  <T extends React.ElementType = "div">(
    props: CardHeaderProps<T>,
    innerRef: typeof props.ref
  ) => {
    const {
      component,
      children,
      renderHeadline,
      renderSubhead,
      renderAction,
      renderAvatar,
      ...rest
    } = props;

    return (
      <CardHeaderWrapper as={component} ref={innerRef} {...rest}>
        {renderAvatar && renderAvatar(CardHeaderAvatar, {})}
        {renderHeadline &&
          renderHeadline(
            Object.assign(TitleTypography, {
              Headline: TitleTypography,
              Subhead: BodyTypography,
            }),
            {
              size: "medium",
            },
            {
              size: "medium",
            }
          )}
        {renderAction && renderAction(CardHeaderAction, {})}
      </CardHeaderWrapper>
    );
  }
);

export default CardHeader;
