import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ReactNode } from "react";
import d_theme from "./theme";

interface IThemeProvider {
  theme: Partial<typeof d_theme>;
  children: ReactNode;
}

const ThemeProvider: React.FC<IThemeProvider> = (props) => {
  const { theme, ...rest } = props;

  // Override the default theme with the one passed in
  const app_theme = Object.assign(d_theme, theme);
  return <EmotionThemeProvider theme={app_theme} {...rest} />;
};

export default ThemeProvider;
