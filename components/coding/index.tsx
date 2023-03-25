import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../libs/sanity.clients";
import {
  FaComment,
  FaCalendarAlt,
  FaUserGraduate,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import Content from '@/components/blog/content'
import Image from "next/image";


const builder = imageUrlBuilder(client);

export default function coding({ movies }: { movies: SanityDocument[] }) {
  return (
    <>
   
        {movies.map((movie) => (
         // eslint-disable-next-line react/jsx-key
         <div className=" p-5">
         <div className="img">
           <Image
             className="w-full"
          src={builder.image(movie.poster).url()}
             alt={movie.title}
             title={movie.title}
           />
         </div>
         <Content 
         title={movie.title}
         overview={movie.overview}
         link={movie.slug.current}
         date={movie.publishedAt}
         authorLink={movie.author.slug.current}
         authorname={movie.author.name}
         taglink={movie.category.slug.current}
         tag={movie.category.title}
         />
        
         </div>
        ))}
        {/* </div> */}
    </>
  );
}
