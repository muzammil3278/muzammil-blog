import { SanityDocument } from "@sanity/client";
import { GetStaticPaths, GetStaticProps } from "next";
import { groq } from "next-sanity";
import { client } from "../../../libs/sanity.clients";
import Movie from "../../../components/coding/Movie"
import Left from "@/components/blog/left"


const query = groq`*[_type == "posts" && slug.current == $slug][0]{
  _id,
  title, 
  body,
  poster,
  publishedAt,
  author->{name,bio,poster,slug},  
  category->{title,slug},
  tag[]->{title, "slug": slug.current},
  slug
}`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "posts" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`
  );

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryParams = { slug: params?.slug ?? `` };

  const post = await client.fetch(query, queryParams);

  return {
    props: {
      post,
    },
  };
};

export default function Page({ post }: { post: {
  title: string; movie: SanityDocument 
} }) {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="col-span-2">
        {/* <Movie movie={post.movie} /> */}
        {post.title}
        </div>
      <div><Left /></div>
    </div>
  )
}


