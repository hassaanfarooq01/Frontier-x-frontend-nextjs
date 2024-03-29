import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import Head from "next/head";

export const config = {
  unstable_runtimeJS: false,
};

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        {/* TITLE FOR THE WEBSITE */}
        <title>FRONTIER X</title>
        {/* GOOGLE FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
