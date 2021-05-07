import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ArrowLink from "../components/atoms/ArrowLink"
import Seo from "../components/Seo"
import { HTMLContent } from "../components/Content"
import Vprint from "../components/atoms/VPrint"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomepageQuery {
      datoCmsHomepage {
        heroMajor
        heroMinor
        introduction
        statistics {
          context
          headline
          buttonText
          buttonLink
        }
      }
    }
  `)
  return (
    <>
      <Seo title="Home" />

      {/* Hero */}

      <div className="max-w-screen-xl p-8 mx-auto text-white md:p-16 lg:p-32 xl:p-40">
        <p className="mb-2 text-lg lg:text-xl">
          {data.datoCmsHomepage.heroMinor}
        </p>
        <h1 className="max-w-screen-sm text-2xl lg:text-4xl">
          {data.datoCmsHomepage.heroMajor}
        </h1>

        <ArrowLink destination={"/courses/"} text="Book Now" />

        <HTMLContent
          className="max-w-screen-md mt-8 text-base lg:text-lg lg:mt-16"
          content={data.datoCmsHomepage.introduction}
        />
        
      </div>

      {/* Statistics cards */}

      <div className="p-8 mx-auto bg-white max-w-screen-3xl lg:p-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {data.datoCmsHomepage.statistics.map((statistic, key) => (
            <div key={key} className="relative p-8 text-white bg-red-500 overflow-hidden">
              <div className="absolute text-red-600 top-0 right-0 w-3/5 opacity-50 -mr-12 h-full pointer-events-none">
                <Vprint />
              </div>
              <h2 className="relative z-10 text-lg lg:text-3xl">{statistic.headline}</h2>
              <HTMLContent
                className="relative z-10 text-base lg:text-lg"
                content={statistic.context}
              />

              {statistic.buttonText ? (
                <ArrowLink
                  className="mt-4"
                  destination={statistic.buttonLink}
                  text={statistic.buttonText}
                />
              ) : null}
              
            </div>
          ))}
        </div>
      </div>

      {/* About our training */}

    </>
  )
}

export default IndexPage
