import Head from "next/head";
import { useRouter } from "next/router";

export default function PageLayout({ children, title = "NewsApp" }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="newsapp - the best app to read news"
        />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <header>🗞️ newsApi</header>
      <main>{children}</main>
      <style jsx>{`
        header {
          padding: 20px;
        }
      `}</style>
    </>
  );
}


