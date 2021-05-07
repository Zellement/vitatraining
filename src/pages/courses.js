import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Seo from "../components/Seo"
import { HTMLContent } from "../components/Content"
import { GatsbyImage } from "gatsby-plugin-image"
import ArrowLink from "../components/atoms/ArrowLink"
import { RiChatQuoteFill } from "react-icons/ri"
import Hero from "../components/Hero"

const CoursesPage = () => {
  const data = useStaticQuery(graphql`
    query CoursesQuery {
      datoCmsOurCoursesPage {
        courses {
          slug
          title
          ticketTailor
          content
          image {
            alt
            gatsbyImageData(imgixParams: { w: "700" }, layout: CONSTRAINED)
          }
        }
        heroMinor
        heroMajor
        introduction
        testimonialsTitle
        testimonials {
          content
        }
      }
    }
  `)
  return (
    <>
      <Seo title="Our Team" />

      {/* Hero */}

      <Hero
        heroMinor={data.datoCmsOurCoursesPage.heroMinor}
        heroMajor={data.datoCmsOurCoursesPage.heroMajor}
        wrapperClasses="max-w-screen-xl p-8 mx-auto text-center text-white md:p-16"
      />

      {/* Courses */}

      <div className="p-8 bg-white lg:p-16">
        <div className="mx-auto max-w-screen-3xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
            <div className="w-full lg:sticky lg:top-0 lg:mb-auto lg:w-1/2">
              <HTMLContent
                className="max-w-screen-md mt-8 text-base text-left lg:text-lg lg:mt-16 content"
                content={data.datoCmsOurCoursesPage.introduction}
              />
            </div>

            <div className="w-full mt-16 lg:w-1/2">
              {data.datoCmsOurCoursesPage.courses.map((course, key) => (
                <div
                  key={key}
                  className="relative mb-8 shadow-lg"
                  id={course.slug}
                >
                  <GatsbyImage
                    className="w-full h-full"
                    image={course.image.gatsbyImageData}
                    alt={course.image.alt ? course.image.alt : "Vita Training"}
                  />
                  <div className="p-8 lg:p-16">
                    <h2 className="text-lg text-red-500 lg:text-xl">
                      {course.title}
                    </h2>
                    <HTMLContent
                      className="text-sm lg:text-base content"
                      content={course.content}
                    />

                    <div className="flex flex-col items-start space-y-4">
                      <ArrowLink
                        newTab={true}
                        className="text-red-500"
                        destination={course.ticketTailor}
                        text="Book this course as an individual"
                      />
                      <ArrowLink
                        className=""
                        destination={"/contact-us/"}
                        text="Contact us for group options"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}

      <div className="p-8 bg-white lg:p-16" id="testimonials">
        <div className="mx-auto max-w-screen-3xl">
          <h2 className="mb-8 text-lg lg:text-xl">
            {data.datoCmsOurCoursesPage.testimonialsTitle}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 lg:gap-16">
            {data.datoCmsOurCoursesPage.testimonials.map((testimonial, key) => (
              <div
                key={key}
                className={
                  "relative mb-8 shadow-lg testimonial-item p-8 lg:p-16 " +
                  (key % 2 === 0 ? null : "bg-red-500 bg-opacity-5")
                }
              >
                <span className="absolute top-0 right-0 mt-2 mr-2 text-3xl text-red-500 pointer-events-none">
                  <RiChatQuoteFill />
                </span>
                <HTMLContent
                  className="text-sm lg:text-base content"
                  content={testimonial.content}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CoursesPage
