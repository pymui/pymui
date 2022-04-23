import { proxy } from "valtio";

const store = proxy<{
  radius: number;
  setRadius: (radius: number | undefined) => void;
}>({
  radius: 1,
  setRadius: (radius = 1) => {
    store.radius = radius;
  },
});

export default store;
