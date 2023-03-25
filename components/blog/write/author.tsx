import React from 'react'
import {client} from '../../../libs/sanity.clients'
import {urlFor} from '../../../libs/image.builder'
import imageUrlBuilder from '@sanity/image-url'
import {FaCalendarAlt, FaUserGraduate} from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
const builder = imageUrlBuilder(client)

interface data {
    bio: string
  date: string
  author: string
  poster: string
  
}

export default function author(props: data) {
  return (
    <>
      <div className="author grid lg:grid-cols-3 gird-cols-1 gap-4 py-4 ">
    <div className="image">
    {/* <img
          src={builder.image(props.poster).url()}
          className="rounded-full h-40 w-40 flex justify-center items-center mx-auto"
          alt={props.author}
        /> */}
       {/* <img src={builder.image(props.poster).width(200).url()} />
        */}
        <Image src={urlFor(props.poster).width(500).height(300).url()}
        alt=""
        title=""
        height="300"
        width="300"
        
        />
    </div>
    <div className="text col-span-2">
      <span className="text-2xl font-bolb">{props.author}</span>
      <p className="py-5">
      {props.bio}
      </p>
      <p className="py-5">
      {props.date}
      </p>
    </div>
  </div>
    </>
  )
}
