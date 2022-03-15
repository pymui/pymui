import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@meeu/material";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={{}}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
