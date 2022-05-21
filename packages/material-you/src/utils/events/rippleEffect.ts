import { RefObject } from "react";

const rippleEffect = (event: MouseEvent, ref: RefObject<HTMLElement>) => {
  const rect = ref.current?.getBoundingClientRect();
  const cursorX = event.clientX;
  const cursorY = event.clientY;
  const fromTop = (rect && cursorY - rect?.top) as number;
  const fromBottom = (rect && rect?.bottom - cursorY) as number;
  const fromLeft = (rect && cursorX - rect?.left) as number;
  const fromRight = (rect && fromLeft && rect?.width - fromLeft) as number;

  // create a function to generate ripple
  const createRipple = (
    rippleX: number,
    rippleY: number,
    rippleDimensions: number
  ) => {
    const ripple = document.createElement("div");

    // set attribute to data-ripple
    ripple.setAttribute("data-ripple", "");

    // style using cssText
    ripple.style.cssText = `
            position: absolute;
            opacity: 1;
            width: ${rippleDimensions}px;
            height: ${rippleDimensions}px;
            left: ${rippleX}px;
            top: ${rippleY}px;
            border-radius: ${rippleDimensions}px;
          `;

    return ripple;
  };
  const requiredDimension = Math.ceil(
    Math.max(fromRight, fromLeft, fromTop, fromBottom)
  );

  let ripple = createRipple(
    fromLeft - requiredDimension,
    fromTop - requiredDimension,
    requiredDimension * 2
  );
  // append ripple to the button
  ref.current?.appendChild(ripple);
  // start animation using Web Animations API
  let rippleAnimation = [
    {
      transform: "scale(0)",
    },
    {
      transform: "scale(1)",
      opacity: 0,
    },
  ];

  const animation = ripple.animate(rippleAnimation, {
    duration: 750,
    easing: "cubic-bezier(0, 0, 0.2, 1)",
    fill: "forwards",
  });

  animation.onfinish = () => ripple.remove();
};

export default rippleEffect;
