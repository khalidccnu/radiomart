import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>Welcome to RadioMart | RadioMart</title>
        <meta
          name="description"
          content="RadioMart is the largest e-Commerce platform in Bangladesh."
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default App;
