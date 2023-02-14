import Head from "next/head";
import Link from "next/link";
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
      <header>
        <Link href="/">🗞️ newsApi</Link>
        <Link href="/about">Ir a About</Link>
      </header>
      <main>{children}</main>
      <style jsx>{`
        header {
          padding: 30px;
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
}
