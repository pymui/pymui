import { useSnapshot } from "valtio";
import d_theme, { state } from "./theme";

const useTheme = () => {
  const themeState = useSnapshot(state);
  return { theme: d_theme, type: themeState.type };
};

export default useTheme;
