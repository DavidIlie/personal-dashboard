import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render(): React.ReactElement {
    return (
      <Html>
        <Head />
        <body style={{ background: "black" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
