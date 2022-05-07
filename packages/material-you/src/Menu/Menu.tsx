import * as React from "react";
import { PortalWrapper } from "../PortalWrapper";
import { PolymorphicWithRef } from "../types";
import { MenuOwnProps } from "./types";
import MenuBase from "./MenuBase";
import { MenuItem } from "../MenuItem";
import { useIsomorphicLayoutEffect, useOnClickOutside } from "../hooks";
import { usePopper } from "react-popper";

type ItemProps = {
  icon: React.ComponentProps<typeof MenuItem.Icon>;
  label: React.ComponentProps<typeof MenuItem.Label>;
};

type MenuProps<T extends React.ElementType> = PolymorphicWithRef<
  T,
  MenuOwnProps & {
    children: (Item: typeof MenuItem, props: ItemProps) => React.ReactNode;
  }
>;
type MenuElement = <T extends React.ElementType = "div">(
  props: MenuProps<T>
) => React.ReactElement<MenuProps<T>>;

const Menu: MenuElement = React.forwardRef(
  <T extends React.ElementType = React.ElementType<HTMLDivElement>>(
    props: MenuProps<T>,
    innerRef: typeof props.ref
  ) => {
    // props
    const {
      component,
      anchorEl,
      open,
      onClose,
      placement = "bottom",
      children,
      ...rest
    } = props;

    const [menuRef, setMenuRef] = React.useState<HTMLDivElement | null>(null);

    const [container, setContainer] = React.useState<HTMLElement>();
    React.useImperativeHandle(innerRef, () => Boolean(menuRef) && menuRef);
    const { styles, attributes } = usePopper(anchorEl, menuRef, {
      placement,
      modifiers: [
        {
          name: "preventOverflow",
          options: {
            boundary: container,
          },
        },
      ],
    });
    useOnClickOutside(menuRef, () => {
      if (open) {
        onClose && onClose();
      }
    });
    useIsomorphicLayoutEffect(() => {
      setContainer(document.querySelector("[data-container]") as HTMLElement);
    }, []);
    return (
      <PortalWrapper open={open}>
        {() => (
          <div
            role="modal"
            aria-modal
            ref={setMenuRef}
            style={styles.popper}
            {...attributes.popper}
          >
            <MenuBase as={component} ref={innerRef} {...rest}>
              {children(MenuItem, {
                // Default configuration
                icon: { size: "medium" },
                label: { variant: "body1", size: "large", component: "span" },
              })}
            </MenuBase>
          </div>
        )}
      </PortalWrapper>
    );
  }
);

export default Menu;
