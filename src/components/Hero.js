import React from "react"
import ArrowLink from "../components/atoms/ArrowLink"
import { HTMLContent } from "../components/Content"

export default function Hero({
  heroMinor,
  heroMajor,
  introduction,
  btnUrl,
  btnText,
  h1Classes,
  wrapperClasses
}) {
  return (
    <>
      <div className={wrapperClasses}>
        <p className="mb-2 text-lg lg:text-xl">{heroMinor}</p>
        <h1 className={"text-2xl lg:text-4xl " + h1Classes }>{heroMajor}</h1>

        { btnUrl ? 
        <ArrowLink destination={btnUrl} text={btnText} className="border-white hover:bg-red-600 focus:bg-red-600" />
        : null }

        { introduction ?
        <HTMLContent
          className="max-w-screen-md mt-8 text-base lg:text-lg lg:mt-16"
          content={introduction}
        />
        : null }
      </div>
    </>
  )
}
