import { proxy } from "valtio";
export const menuStore = proxy<{
  open: boolean;
}>({
  open: false,
});
