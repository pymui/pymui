import * as React from "react";
import { createPortal } from "react-dom";
import { useIsomorphicLayoutEffect } from "../hooks";

interface PortalProps {
  children: () => React.ReactNode;
  open: boolean;
  // onClose: (state: boolean) => void;
}

const PortalWrapper: React.FunctionComponent<PortalProps> = (props) => {
  const [mount, setMount] = React.useState(false);
  useIsomorphicLayoutEffect(() => {
    setMount(props.open);
  }, [props.open]);
  return mount ? createPortal(props.children(), document.body) : null;
};

export default PortalWrapper;
