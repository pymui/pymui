import {
  DetailedHTMLProps,
  HTMLAttributes,
  FunctionComponent,
  ElementType,
} from "react";

export type ElementProps<T, U> = FunctionComponent<
  DetailedHTMLProps<HTMLAttributes<T>, T> & Partial<U>
>;

export type ComponentType<T> = ElementType<T>;
