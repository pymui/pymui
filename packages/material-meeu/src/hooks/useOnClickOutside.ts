import useEventListener from "./useEventListener";

type Handler = (event: MouseEvent | TouchEvent) => void;

function useOnClickOutside(
  element: HTMLElement | null,
  handler: Handler,
  mouseEvent:
    | "mouseup"
    | "mousedown"
    | "click"
    | "touchstart"
    | "touchend" = "mousedown"
): void {
  useEventListener(mouseEvent, (event) => {
    //   Do nothing if clicking ref's element or descendent elements.
    if (!element || element.contains(event.target as Node)) {
      return;
    }
    handler(event);
  });
}
export default useOnClickOutside;
