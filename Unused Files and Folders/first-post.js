// no longer used after tutorial

// import Link from "next/link";
// import Head from "next/head";
// import Script from "next/script";
// import Layout from "../components/layout";

// export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        {/* this method allows the background of all the pages to be yellow if we change the html style */}
        <Link href="/">Back to home</Link>

        {/* this method only allows the background to be cleared after clicking on the link  */}
        {/* <a href="/">Back to home</a> */}
      </h2>
    </Layout>
  );
}
