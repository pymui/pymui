import { RefObject, useEffect, useRef } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

function useEventListener<T extends keyof WindowEventMap>(
  eventName: T,
  handler: (event: WindowEventMap[T]) => void
): void;
function useEventListener<
  T extends keyof HTMLElementEventMap,
  U extends HTMLElement = HTMLDivElement
>(
  eventName: T,
  handler: (event: HTMLElementEventMap[T]) => void,
  element: RefObject<U>
): void;

function useEventListener<
  TW extends keyof WindowEventMap,
  UW extends keyof HTMLElementEventMap,
  K extends HTMLElement | void = void
>(
  eventName: TW | UW,
  handler: (
    event: WindowEventMap[TW] | HTMLElementEventMap[UW] | Event
  ) => void,
  element?: RefObject<K>
) {
  // create a ref that store handler
  const _refHandler = useRef(handler);
  useIsomorphicLayoutEffect(() => {
    _refHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // define the listing target
    const targetElem: K | Window = element?.current ?? window;
    if (!(targetElem && targetElem.addEventListener)) {
      return;
    }
    // create event listener that calls handler function stored in ref
    const eventListener: typeof handler = (event) => _refHandler.current(event);
    targetElem.addEventListener(eventName, eventListener);

    //   Remove event on cleanup
    return () => {
      targetElem.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

export default useEventListener;
