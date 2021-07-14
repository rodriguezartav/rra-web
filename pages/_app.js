import { NextIntlProvider } from "next-intl";
import NextApp from "next/app";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

MyApp.getInitialProps = async function getInitialProps(context) {
  const { locale } = context.router;
  return {
    ...(await NextApp.getInitialProps(context)),
    messages: require(`../messages/${locale}.json`),
  };
};

export default MyApp;
