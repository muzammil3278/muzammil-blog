import React from "react";
import { client } from "../../../libs/sanity.clients";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(client);

interface data {
  poster:string,
  title:string
}

export default function image( props: data ) {
  return (
    <div className="bg-white p-3">
      <div className="image">
        <img
          src={builder.image(props.poster).url()}
          className="h-full w-full"
          alt={props.title}
        />
      </div>
    </div>
  );
}
