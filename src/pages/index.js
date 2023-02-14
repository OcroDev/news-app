import PageLayout from "@/components/pageLayout";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home({ articles }) {
  return (
    <>
      <PageLayout title="NewsApp - Home">
        <div className={styles.container}>
          {articles.length === 0 && <p>No tenemos artículos</p>}
          {articles.length > 0 &&
            articles.map((article, index) => {
              return (
                <div key={index}>
                  <img
                    alt={`Image for the article ${article.tile}`}
                    src={article.urlToImage}
                  />
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                </div>
              );
            })}
          <Link href="/about">Ir a About</Link>
        </div>
        <style jsx>{`
          div {
            padding: 50px;
          }
        `}</style>
      </PageLayout>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=apple&from=2023-02-13&to=2023-02-13&sortBy=popularity&apiKey=fd7badad2728461a8b7bbc992e090288"
  );
  const { articles } = await response.json();
  return {
    props: {
      articles,
    },
  };
}
