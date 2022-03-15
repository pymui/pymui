import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ReactNode, useEffect } from "react";
import { useSnapshot } from "valtio";
import d_theme, { state } from "./theme";

type DeepPartial<T> = Partial<{ [P in keyof T]: DeepPartial<T[P]> }>;
interface IThemeProvider {
  theme?: DeepPartial<typeof d_theme>;
  children: ReactNode;
}

const ThemeProvider: React.FC<IThemeProvider> = (props) => {
  const { theme, ...rest } = props;
  const { type } = useSnapshot(state);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let body = document.querySelector("body");
      if (body) {
        if (type === "dark") {
          body.style.backgroundColor = `rgba(31, 31, 31, 1)`;
          body.style.color = `rgba(232, 222, 248, 1)`;
        } else {
          body.style.backgroundColor = `rgba(255, 255, 255, 1)`;
          body.style.color = `rgba(black, 1)`;
        }
      }
    }
  }, [type]);

  // Override the default theme with the one passed in
  const app_theme = Object.assign(d_theme, theme);
  return <EmotionThemeProvider theme={app_theme} {...rest} />;
};

export default ThemeProvider;
