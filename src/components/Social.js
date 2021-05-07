import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GrFacebook, GrTwitter, GrMedium } from "react-icons/gr"

export default function Footer( {iconClasses} ) {
  const data = useStaticQuery(graphql`
    query {
      datoCmsGlobal {
        facebookUrl
        mediumUrl
        twitterUrl
      }
    }
  `)
  return (
    <>
      {data.datoCmsGlobal.facebookUrl ? (
        <a
          className={iconClasses}
          href={data.datoCmsGlobal.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrFacebook />
        </a>
      ) : null}
      {data.datoCmsGlobal.twitterUrl ? (
        <a
          className={iconClasses}
          href={data.datoCmsGlobal.twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrTwitter />
        </a>
      ) : null}
      {data.datoCmsGlobal.mediumUrl ? (
        <a
          className={iconClasses}
          href={data.datoCmsGlobal.mediumUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrMedium />
        </a>
      ) : null}
    </>
  )
}
