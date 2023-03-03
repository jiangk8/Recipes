import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";

const inter = Inter({ subsets: ["latin"] });

const graphcms = new GraphQLClient(
  "https://api-us-west-2.hygraph.com/v2/clbvxfsuy42y401usdso05d8l/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      category
      instruction {
        html
      }
      ingredients
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Recipes App</title>
        <meta name='description' content='IDK what to eat?? :<' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}></main>
    </div>
  );
}
