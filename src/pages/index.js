import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ArrowLink from "../components/atoms/ArrowLink"
import Seo from "../components/Seo"
import { HTMLContent } from "../components/Content"
import Vprint from "../components/atoms/VPrint"
import Hero from "../components/Hero"

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

      <Hero
        heroMinor={data.datoCmsHomepage.heroMinor}
        heroMajor={data.datoCmsHomepage.heroMajor}
        introduction={data.datoCmsHomepage.introduction}
        btnUrl="/courses/"
        btnText="See our courses"
        h1Classes="max-w-screen-sm"
        wrapperClasses="max-w-screen-xl p-8 mx-auto text-white md:p-16 lg:p-32 xl:p-40"
      />

      {/* Statistics cards */}

      <div className="p-8 mx-auto bg-white max-w-screen-3xl lg:p-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.datoCmsHomepage.statistics.map((statistic, key) => (
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
              <HTMLContent
                className="relative z-10 text-base lg:text-lg"
                content={statistic.context}
              />

              {statistic.buttonText ? (
                <ArrowLink
                  className="relative z-10 mt-4 hover:bg-red-600 focus:bg-red-600"
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
              className="mt-4 text-gray-800 border-gray-800 hover:bg-gray-200 focus:bg-gray-200"
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
