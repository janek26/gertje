import App from "next/app";
import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "../config/theme";
import reset from "styled-reset";
import Head from "next/head";

const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5em;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
          />
          <script src="https://kit.fontawesome.com/4a26727c09.js" />
        </Head>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
