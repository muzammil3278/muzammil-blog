import React from 'react'
import Link from 'next/link'

interface data {
  title: string
  slug: string
}

export default function Tag(props: data) {
  return (
    <>
      <li className="mr-4" >
        <Link href={'/' + props.slug} className="bg-red-400 text-white px-3 py-2 rounded">
          {props.title}
        </Link>
      </li>
    </>
  )
}
