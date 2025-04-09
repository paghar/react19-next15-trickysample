import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className="flex items-center justify-center "
        style={{ background: "#edf2f7" }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
