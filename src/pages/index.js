import PageLayout from "@/components/pageLayout";
import Image from "next/image";
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
                  <Image
                    alt={`Image for the article ${article.tile}`}
                    src={article.urlToImage}
                    height={300}
                    width={200}
                  />
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                </div>
              );
            })}
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

//N request -> se ejecuta 1 vez en build time (o para refrescar la página)
export async function getStaticProps() {
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

// N request -> se ejecuta N veces
// para datos que necesitas que sean MUY live
// porque tiene demasiado datos dinámicos
// export async function getServerSideProps() {
//   const response = await fetch(
//     "https://newsapi.org/v2/everything?q=apple&from=2023-02-13&to=2023-02-13&sortBy=popularity&apiKey=fd7badad2728461a8b7bbc992e090288"
//   );
//   const { articles } = await response.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// }
