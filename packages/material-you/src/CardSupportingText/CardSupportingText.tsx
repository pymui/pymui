import * as React from "react";
import { BodyTypographyBase } from "../base-components";
import { BodyTypography } from "../BodyTypography";
import { PolymorphicWithRef } from "../types";

type CardSupportingTextProps<T extends React.ElementType = "p"> =
  PolymorphicWithRef<
    T,
    {
      renderText?: (
        Text: typeof BodyTypography,
        props: React.ComponentProps<typeof BodyTypography>
      ) => React.ReactElement<typeof BodyTypography>;
    }
  >;
type CardSupportingTextElement = <T extends React.ElementType = "p">(
  props: CardSupportingTextProps<T>
) => React.ReactElement<CardSupportingTextProps<T>>;

const CardSupportingText: CardSupportingTextElement = React.forwardRef(
  <T extends React.ElementType = "p">(
    props: CardSupportingTextProps<T>,
    innerRef: typeof props.ref
  ) => {
    const { component, renderText, ...rest } = props;

    if (renderText) {
      return (
        <React.Fragment>
          {renderText &&
            renderText(BodyTypography, {
              variant: "body1",
              size: "medium",
              supportingText: true,
            })}
        </React.Fragment>
      );
    } else {
      return (
        <BodyTypographyBase
          as={component}
          variant="body1"
          size="medium"
          {...rest}
          ref={innerRef}
        />
      );
    }
  }
);

export default CardSupportingText;
