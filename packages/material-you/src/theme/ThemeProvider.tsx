import {
  ThemeProvider as EmotionThemeProvider,
  Global,
  css,
} from "@emotion/react";
import { useMemo } from "react";
import { ReactNode } from "react";
import { useSnapshot } from "valtio";
import d_theme, { state } from "./theme";

type DeepPartial<T> = Partial<{ [P in keyof T]: DeepPartial<T[P]> }>;
interface IThemeProvider {
  theme?: DeepPartial<typeof d_theme>;
  children: ReactNode;
}

const ThemeProvider: React.FC<IThemeProvider> = (props) => {
  const { theme, children, ...rest } = props;
  const { type } = useSnapshot(state);

  const _bg = useMemo(
    () =>
      new Map([
        ["light", "rgba(255, 255, 255, 1)"],
        ["dark", "rgba(0, 0, 0, 1)"],
      ]),
    [type]
  ).get(type);
  const _color = useMemo(
    () =>
      new Map([
        ["light", "rgba(0, 0, 0, 1)"],
        ["dark", "rgba(232, 222, 248, 1)"],
      ]),
    [type]
  ).get(type);

  // Override the default theme with the one passed in
  const app_theme = Object.assign(d_theme, theme);
  return (
    <EmotionThemeProvider theme={app_theme} {...rest}>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }
          body {
            background: ${_bg};
            color: ${_color};
          }
        `}
      />
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
