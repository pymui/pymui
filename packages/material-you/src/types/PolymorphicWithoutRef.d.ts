type PropsOf<
  E extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<E, React.ComponentPropsWithoutRef<E>>;

type ComponentProp<E extends React.ElementType> = {
  /**
   * An override of the default HTML tag.
   * Can also be another React Component.
   */
  component?: E;
};

/**
 * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
 * (`OverrideProps`), ensuring that any duplicates are overridden by the overriding
 * set of props.
 */
type ExtendableProps<ExtendedProps = {}, OverrideProps = {}> = OverrideProps &
  Omit<ExtendedProps, keyof OverrideProps>;

/**
 * Allows for inheriting the props from the specified element type so that
 * props like children, className & style work, as well as element-specific
 * attributes like aria roles. The component (`E`) must be passed in.
 */
type InheritableElementProps<
  E extends React.ElementType,
  Props = {}
> = ExtendableProps<PropsOf<E>, Props>;

/**
 * A more sophisticated version of `InheritableElementProps` where
 * the passed in `component` prop will determine which props can be included
 */
export type PolymorphicWithoutRef<
  E extends React.ElementType,
  Props = {}
> = InheritableElementProps<E, Props & ComponentProp<E>>;
