import React from "react"
import { Link } from "gatsby"
import { ArrowRight, ArrowLeft } from "../icons/Arrows"
import { GoLinkExternal } from "react-icons/go"

export default function ArrowLink({
  destination,
  alkey,
  className,
  text,
  arrowLeft,
  newTab
}) {
  if (newTab) {
    return (

      <a
        href={destination}
        key={alkey}
        target="_blank"
        rel="noopener noreferrer"
        className={
          "inline-flex items-center mt-2 group p-2 px-4 space-x-2 text-sm lg:text-lg group arrow-link border-2 rounded-full " +
          className
        }
      >
        {arrowLeft ? <GoLinkExternal className="max-w-16" /> : null}
        <span
          className={
            "inline-block font-bold transition-all flex-grow flex " +
            (arrowLeft ? "group-hover:pl-4" : "group-hover:pr-4")
          }
        >
          {text}
        </span>
        {arrowLeft ? null : <GoLinkExternal className="max-w-16" />}
      </a>

    )
  } else {
    return (
      <Link
        to={destination}
        key={alkey}
        className={
          "inline-flex items-center mt-2 group p-2 px-4 space-x-2 text-sm lg:text-lg group arrow-link border-2 rounded-full " +
          className
        }
      >
        {arrowLeft ? <ArrowLeft className="max-w-16" /> : null}
        <span
          className="flex flex-grow inline-block font-bold transition-all"
        >
          {text}
        </span>
        {arrowLeft ? null : <ArrowRight className={ "transition-all duration-300 max-w-16 " + (arrowLeft ? "group-hover:mr-4" : "group-hover:ml-4") }  />}
      </Link>
    )
  }
}
