import d_theme from "./theme";
import { useSnapshot } from "valtio";

const useTheme = () => {
  const theme = useSnapshot(d_theme);
  return theme;
};

export default useTheme;
