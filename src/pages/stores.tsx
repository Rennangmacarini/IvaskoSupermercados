import { Footer } from "../components/footer";
import { Header } from "../components/Header";
import { Store } from "../components/Stores";

import { GetStaticProps } from "next";
import { getPrismicClient } from "../services/prismic";
import Prismic from '@prismicio/client';

type Posts = {
    id: string;
    one: string;
    two: string;
    three: string;
    four: string;
    five: string;

    contactone: string;
    saturdayone: string;
    sundayone:string;


    contacttwo:string;
    saturdaytwo: string;
    sundaytwo:string;
  }
  
  interface PostProps{
    posts: Posts[]
  }


export default function Stores({posts} : PostProps) {
    return (
        <>
            <Header />
            <Store store={posts}/>
            <Footer/>
        </>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()
  
    const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'stores')],
    {
      fetch: ['stores.content', 'stores.one', 'stores.two', 'stores.three', 'stores.four', 'stores.five',
      'stores.contactone', 'stores.saturdayone', 'stores.sundayone', 'stores.contacttwo', 'stores.saturdaytwo', 'stores.sundaytwo'
    ],
    })
     
    const posts = response.results.map(post => {
      console.log("data", post.data)
      console.log("post", post)
      return {
        id: post.uid,
        one:post.data.one.url,
        two:post.data.two.url,
        three:post.data.three.url,
        four:post.data.four.url,
        five:post.data.five.url,

        contactone:post.data.contactone[0].text,
        saturdayone:post.data.saturdayone[0].text,
        sundayone:post.data.sundayone[0].text,

        contacttwo:post.data.contacttwo[0].text,
        saturdaytwo:post.data.saturdaytwo[0].text,
        sundaytwo:post.data.sundaytwo[0].text
      };
    });
       return{
        props: {
            posts
        }
       }
  }