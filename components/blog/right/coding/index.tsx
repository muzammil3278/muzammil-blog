import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../../libs/sanity.clients";
import {
  FaComment,
  FaCalendarAlt,
  FaUserGraduate,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import Link from "next/link";
import type { SanityDocument } from "@sanity/client";

const builder = imageUrlBuilder(client);

export default function coding({ movies }: { movies: SanityDocument[] }) {
  return (
    <>
   
      <span className="py-3 mt-5 px-6 font-bold text-lg bg-red-500 block w-full text-white">
        Coding
      </span>
      <div className="grid lg:grid-cols-2 gird-cols-1 gap-4 bg-white">
        {movies.map((movie) => (
         <div className=" p-5">
         <div className="img">
           <img
             className="w-full"
          src={builder.image(movie.poster).url()}
             alt={movie.title}
             title={movie.title}
           />
         </div>
         <div className="content bg-teal-50 p-6">
           <a href="image-post.html">
             <h3 className="text-black text-2xl font-bold pt-4">
             {movie.title}
             </h3>
           </a>
           <ul className="meta flex text-black py-4">
             <li>
               <a href="#" className="flex items-center">
                 <span className="pr-1 text-red-500">
                   <FaUserGraduate />
                 </span>
                 {movie.author.name}
               </a>
             </li>
             <li className="pl-5">
               <a href="#" className="flex items-center">
                 <span className="pr-1 text-red-500">
                   <FaCalendarAlt />
                 </span>
                 {movie.publishedAt}
               </a>
             </li>
           </ul>
           <p>
           {movie.overview}
           </p>
           <div className="meta flex justify-between text-black py-4">
             <span>
               <a href="#" className="flex items-center">
                 <span className="pr-1 text-red-500">
                   <FaUserGraduate />
                 </span>
                 Read More
               </a>
             </span>
             <span className="pl-5">
               <a href="#" className="flex items-center">
                 <span className="pr-1 text-red-500">
                   <FaCalendarAlt />
                 </span>
                 {movie.category.title}
               </a>
             </span>
           </div>
         </div>
       </div>
        ))}
      </div> 
    </>
  );
}
