import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Seo from "../components/Seo"
import { HTMLContent } from "../components/Content"
import { GatsbyImage } from "gatsby-plugin-image"
import Hero from "../components/Hero"

const OurTeamPage = () => {
  const data = useStaticQuery(graphql`
    query OurTeamQuery {
      datoCmsOurTeamPage {
        heroMinor
        heroMajor
        teamMembers {
          avatar {
            gatsbyImageData(
              width: 220,
              height: 220,
              imgixParams: { w: "220", h: "220" }, layout: FIXED)
          }
          name
          role
          supportTitle
          content
        }
      }
    }
  `)

  const { heroMajor, heroMinor, teamMembers } = data.datoCmsOurTeamPage

  return (
    <>
      <Seo title="Our Team" />

      {/* Hero */}

      <Hero
        heroMinor={heroMinor}
        heroMajor={heroMajor}
        wrapperClasses="max-w-screen-xl p-8 mx-auto text-center text-white md:p-16"
      />

      {/* Team members */}

      <div className="p-8 bg-white lg:p-16">
        <div className="mx-auto max-w-screen-3xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {teamMembers.map((member, key) => (
              <div key={key} className="relative p-8 shadow-lg lg:p-16">
                <GatsbyImage
                  className="object-cover w-full h-full mx-auto mb-8 overflow-hidden rounded-full shadow-lg"
                  image={member.avatar.gatsbyImageData}
                  alt={member.avatar.alt ? member.avatar.alt : "Vita Training"}
                  imgClassName="rounded-full"
                />
                <h2 className="text-lg text-center lg:text-xl">
                  {member.name}
                </h2>
                <h3 className="flex flex-col mb-12 text-base text-center lg:text-lg">
                  <span className="text-gray-600">{member.role}</span>
                  {member.supportTitle ? (
                    <span className="text-gray-400">{member.supportTitle}</span>
                  ) : null}
                </h3>
                <HTMLContent
                  className="text-sm lg:text-base content"
                  content={member.content}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default OurTeamPage
