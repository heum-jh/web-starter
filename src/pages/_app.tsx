import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import Head from "next/head";
import AlertProvider from "src/components/common/alert-provider";
import "src/styles/globals.css";
import { client } from "src/core/apollo-client";
import Layout from "src/components/common/layout";
import { PopupProvider } from "src/components/common/popup-provider";
import OptionProvider from "src/components/common/option-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* viewport */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        />
        {/* robots */}
        <meta name="robots" content="noindex, follow, nocache" />
        <meta
          name="googlebot"
          content="index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />
        {/* icons */}
        <link rel="shortcut icon" href="/shortcut-icon.png" />
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-precomposed.png" />
        <link rel="icon" href="https://example.com/icon.png" />
        <link rel="apple-touch-icon" href="/apple-icon-x3.png" sizes="180x180" type="image/png" />
        {/* appLinks */}
        <meta property="al:ios:url" content="https://nextjs.org/ios" />
        <meta property="al:ios:app_store_id" content="app_store_id" />
        <meta property="al:android:package" content="com.example.android/package" />
        <meta property="al:android:app_name" content="app_name_android" />
        <meta property="al:web:url" content="https://nextjs.org/web" />
        <meta property="al:web:should_fallback" content="true" />
      </Head>
      <ApolloProvider client={client}>
        <OptionProvider />
        <AlertProvider />
        <PopupProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PopupProvider>
      </ApolloProvider>
    </>
  );
}
