import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ArrowLink from "../components/atoms/ArrowLink"
import Seo from "../components/Seo"
import Vprint from "../components/atoms/VPrint"
import { HTMLContent } from "../components/Content"
import { AnchorLink } from "gatsby-plugin-anchor-links"

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

  const {
    heroMajor,
    heroMinor,
    introduction,
    statistics,
  } = data.datoCmsHomepage

  return (
    <>
      <Seo title="Home" />

      {/* Hero */}

      <div className="max-w-screen-xl p-8 mx-auto text-white md:p-16 lg:p-32 xl:p-40">
        <p className="mb-2 text-lg lg:text-2xl">{heroMinor}</p>
        <h1 className="text-2xl lg:text-5xl">{heroMajor}</h1>

        <div className="flex flex-col items-start sm:flex-row sm:space-x-2">
          <ArrowLink
            destination="/courses/"
            text="About our courses"
            className="text-red-500 bg-white hover:bg-gray-200 focus:bg-gray-200"
          />

          <AnchorLink
            to="/courses/#book-now"
            className="inline-flex items-center p-2 px-4 mt-2 space-x-2 text-sm text-white bg-orange-500 rounded-full group lg:text-lg arrow-link hover:bg-orange-600 focus:bg-orange-600"
          >
            <span>Book now</span>
          </AnchorLink>
        </div>

        <HTMLContent
          className="max-w-screen-md mt-8 text-base lg:text-lg lg:mt-16"
          content={introduction}
        />
      </div>

      {/* Statistics cards */}

      <div className="p-8 mx-auto bg-white max-w-screen-3xl lg:p-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {statistics.map((statistic, key) => (
            <div
              key={key}
              className="relative p-8 overflow-hidden text-white bg-red-500"
            >
              <div className="absolute top-0 right-0 w-3/5 h-full -mr-12 text-red-600 opacity-50 pointer-events-none">
                <Vprint />
              </div>
              <h2 className="relative z-10 text-2xl lg:text-3xl">
                {statistic.headline}
              </h2>
              <p className="relative z-10 text-base lg:text-lg">
                {statistic.context}
              </p>

              {statistic.buttonText ? (
                <ArrowLink
                  className="relative z-10 mt-4 text-white bg-orange-500 hover:bg-orange-700 focus:bg-orange-700"
                  destination={statistic.buttonLink}
                  text={statistic.buttonText}
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}

      <div className="mx-auto bg-white border-t-2 border-gray-300 max-w-screen-3xl">
        <div className="flex flex-col p-8 text-lg md:flex-row lg:p-16 ">
          <div className="max-w-screen-md mx-auto">
            <h2 className="text-2xl">Get in touch</h2>

            <p>
              For more information or to see how you can get involved, contact
              the VITA team.
            </p>

            <ArrowLink
              className="mt-4 text-white bg-red-500 hover:bg-red-700 focus:bg-red-700"
              destination="/contact-us/"
              text="Contact us"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
