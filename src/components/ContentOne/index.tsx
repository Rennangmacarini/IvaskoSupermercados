import { getPrismicClient } from "../../services/prismic";
import Prismic from '@prismicio/client';
import styles from "./styles.module.scss";
import { GetStaticProps } from "next";
import { RichText } from "prismic-dom";


// estrutura normal //
export function ContentOne() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1>Há 23 anos proporcionando
            <br />
            o que há de
        </h1>
        <h3>melhor</h3>
        <p>
          O Super Ivasko busca levar ao seus clientes produtos com preço baixo,
          sempre prezando pela qualidade. Além do nosso amplo mix de produtos,
          possui um padrão de qualidade para melhor atender o cliente, desde o
          atendimento até o açougue e panificadoras, onde todos os produtos são
          produzidos artesanalmente dentro das lojas.
        </p>
      </div>
      <div className={styles.imagem}>
        <img src="/images/bannerone.png" alt="" />
      </div>
    </div>
  );
}


//ESTRUTURA EM ANDAMENTO //
/*
type Post = {
  id: String;
  title: String;
  excerpt: String;
}
interface PostProps{
  post: Post[]
}
export function ContentOne({ post }: PostProps) {
  return (
    <div className={styles.main}>
      { post.map(post =>(
        <div key={post.id} className={styles.content}>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
      </div>
      ))}
 
      <div className={styles.imagem}>
        <img src="/images/bannerone.png" alt="" />
      </div>
    </div>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()
  const response = await prismic.query(
  [Prismic.predicates.at('document.type', 'publication')],
  {
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100,
  })
  const posts = response.results.map(post => {
    return {
      id: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: RichText.asHtml(post.data.content)
    };
  });
     return{
      props: {
          posts
      }
     }
}
*/