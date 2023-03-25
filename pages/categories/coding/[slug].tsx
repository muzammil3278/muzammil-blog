import {SanityDocument} from '@sanity/client'
import {GetStaticPaths, GetStaticProps} from 'next'
import {groq} from 'next-sanity'
import {client} from '../../../libs/sanity.clients'
import Movie from '../../../components/coding/Movie'
import Left from '@/components/blog/left'
import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import {Post} from '@/types/index'
import Poster from '@/components/blog/write/image'
import Heading from '@/components/blog/write/head'
import Tag from '@/components/blog/write/Tag'
import Banner from '@/components/coding/banner'
import Author from '@/components/blog/write/author'



const query = groq`*[_type == "posts" && slug.current == $slug][0]{
  _id,
  title, 
  body,
  poster,
  publishedAt,
  slug,
  author->{name,bio,poster,slug},  
  category->{title,slug},  
  "tag": tag[]->{title},
  
}`

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "posts" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`
  )

  return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const queryParams = {slug: params?.slug ?? ``}

  const post = await client.fetch(query, queryParams)

  return {
    props: {
      post,
    },
  }
}
type TagList = {
  title: string
  slug: string
}
type PageProps = {
  post: {
    tag: Array<TagList>
    body: []
    publishedAt: string
    author: any
    category: any
    title: string
    poster: string
    movie: SanityDocument
    post: Post
  }
}
export default function Page({post}: PageProps) {
  const {
    title = 'Missing title',
    category,
    author,
    publishedAt,
    tag,
    poster,
    body = []
  } = post
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="col-span-2">
        <main className="bg-white p-3">
          <Poster poster={poster} title={title} />
          <div className="context pl-2">
            <Heading
              date={publishedAt}
              author={author.name}
              authorlink={author.slug.current}
              cat={category.title}
              catlink={category.slug.current}
              title={title}
            />
          </div>

          <div className="p-4  leading-10 tracking-wide">
            <p>
              <PortableText value={body} />
            </p>
          </div>

          <div className="tag">
            <ul className="flex">
            {tag && (
        <ul>
          Posted in
          {tag.map((tags:any) => <li key={tags}>{tags.title}</li>)}
        </ul>
      )}
            {/* {post.tag.map(tag => <li>{tag.title}</li>)} */}
              {/* {post.tag.map(function (tag: data) {
              return (
                <Tag    
                key={tag._id}
                title={tag.title}
                slug={tag.slug}
                 />
              )
            })} */}
              {/* {post.tag.map((tag: data) => (
         <Tag    
         title={tag.title}
         slug={tag.slug}
          />>
      ))} */}
            </ul>
          </div>
          {/* ads */}
          <Banner />
          {/* author */}
          <Author
            author={author.name}
            poster={author.poster}
            bio={author.bio}
            date={publishedAt}
          />
        </main>
      </div>
      <div>
        <Left />
      </div>
    </div>
  )
}

interface data {
  title: string
  slug: string
}
