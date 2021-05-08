import React from "react"
import { Link } from "gatsby"
import { GoLinkExternal } from "react-icons/go"

export default function ArrowLink({
  destination,
  alkey,
  className,
  text,
  newTab,
}) {
  if (newTab) {
    return (
      <a
        href={destination}
        key={alkey}
        target="_blank"
        rel="noopener noreferrer"
        className={
          "inline-flex items-center mt-2 group p-2 px-4 space-x-2 text-sm lg:text-lg arrow-link rounded-full " +
          className
        }
      >
        {text}
      </a>
    )
  } else {
    return (
      <Link
        to={destination}
        key={alkey}
        className={
          "inline-flex items-center mt-2 group p-2 px-4 space-x-2 text-sm lg:text-lg arrow-link rounded-full " +
          className
        }
      >
        {text}
      </Link>
    )
  }
}
