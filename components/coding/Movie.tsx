import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import {SanityDocument} from '@sanity/client'
import {client} from '../../libs/sanity.clients'

import Poster from '@/components/blog/write/image'
import Heading from '@/components/blog/write/head'
import Tag from '@/components/blog/write/Tag'
import Banner from '@/components/coding/banner'
import Author from '@/components/blog/write/author'

const builder = imageUrlBuilder(client)

export default function Movie({movie}: {movie: SanityDocument}) {
  return (
    <>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <main className="bg-white p-3">
        <Poster poster={movie.poster} title={movie.title} />
        <div className="context pl-2">
          <Heading
            date={movie.publishedAt}
            author={movie.author.name}
            authorlink={movie.author.slug.current}
            cat={movie.category.title}
            catlink={movie.category.slug.current}
            title={movie.title}
          />
        </div>

        <div className="p-4  leading-10 tracking-wide">
          <p>
            <PortableText value={movie.body} />
          </p>
        </div>
        {/* <Tag /> */}
        <div className="tag">
          <ul className="flex">
            {movie.tag.map(function (tag: data) {
              return (
                // eslint-disable-next-line react/jsx-key
                <Tag    
                title={tag.title}
                slug={tag.slug}
                 />
              )
            })}
          </ul>
        </div>
        {/* ads */}
        <Banner />
        {/* author */}
        <Author 
        author={movie.author.name}
        poster={movie.author.poster}
        bio={movie.author.bio}
        date={movie.publishedAt}
         />
      </main>
    </>
  )
}

interface data {
  title: string,
  slug: string,
}
