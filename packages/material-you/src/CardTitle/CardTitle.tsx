import * as React from "react";
import { PolymorphicWithRef } from "../types";
import { CardTitleWrapper, CardTitleBase } from "../base-components";
// import { TitleTypography } from "../TitleTypography";
import { BodyTypography } from "../BodyTypography";

type CardTitleProps<T extends React.ElementType = "h2" | "div"> =
  PolymorphicWithRef<
    T,
    {
      renderTitle?: (
        Title: typeof BodyTypography,
        props: React.ComponentProps<typeof BodyTypography>
      ) => React.ReactElement<typeof BodyTypography>;
      renderSubtitle?: (
        Subtitle: typeof BodyTypography,
        props: React.ComponentProps<typeof BodyTypography>
      ) => React.ReactElement<typeof BodyTypography>;
    }
  >;
type CardTitleElement = <T extends React.ElementType = "h2" | "div">(
  props: CardTitleProps<T>
) => React.ReactElement<CardTitleProps<T>>;

const CardTitle: CardTitleElement = React.forwardRef(
  <T extends React.ElementType = "h2" | "div">(
    props: CardTitleProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, children, renderTitle, renderSubtitle, ...rest } = props;
    if (renderTitle && !renderSubtitle) {
      return (
        <CardTitleWrapper as={component} ref={innerRef} {...rest}>
          {renderTitle(BodyTypography, {
            size: "large",
            component: "h2",
          })}
        </CardTitleWrapper>
      );
    }
    if (renderTitle && renderSubtitle) {
      return (
        <CardTitleWrapper as={component} ref={innerRef} {...rest}>
          {renderTitle(BodyTypography, {
            size: "large",
            component: "h2",
          })}
          {renderSubtitle(BodyTypography, {
            size: "medium",
            component: "h3",
          })}
        </CardTitleWrapper>
      );
    } else {
      return (
        <CardTitleBase as={component} ref={innerRef} {...rest}>
          {children}
        </CardTitleBase>
      );
    }
  }
);

export default CardTitle;
