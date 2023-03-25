import {PortableText} from '@portabletext/react'
import {SanityDocument} from '@sanity/client'

export default function Movie({movie}: {movie: SanityDocument}) {
  return (
    <>

        <div className="p-4  leading-10 tracking-wide">
          <p>
            <PortableText value={movie.body} />
          </p>
        </div>
    
    </>
  )
}


