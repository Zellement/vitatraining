import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Seo from "../components/Seo"
import { HTMLContent } from "../components/Content"
import { GatsbyImage } from "gatsby-plugin-image"
import ArrowLink from "../components/atoms/ArrowLink"
import { RiChatQuoteFill } from "react-icons/ri"
import Hero from "../components/Hero"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Vprint from "../components/atoms/VPrint"

const CoursesPage = () => {
  const data = useStaticQuery(graphql`
    query CoursesQuery {
      datoCmsOurCoursesPage {
        courses {
          slug
          title
          content
          image {
            alt
            gatsbyImageData(
              imgixParams: { w: "1000", h: "350" }
              layout: CONSTRAINED
            )
          }
        }
        heroMinor
        heroMajor
        introduction
        testimonialsTitle
        testimonials {
          content
          jobTitle
        }
        bookNowIntroduction
      }
    }
  `)

  const {
    heroMajor,
    heroMinor,
    introduction,
    courses,
    testimonialsTitle,
    testimonials,
    bookNowIntroduction
  } = data.datoCmsOurCoursesPage

  return (
    <>
      <Seo title="Courses" />

      {/* Hero */}

      <Hero
        heroMinor={heroMinor}
        heroMajor={heroMajor}
        wrapperClasses="max-w-screen-xl p-8 mx-auto text-center text-white md:p-16"
      />

      {/* Courses */}

      <div className="p-8 bg-white lg:p-16">
        <div className="mx-auto max-w-screen-3xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
            <div className="w-full 2xl:sticky 2xl:top-0 2xl:mb-auto lg:w-2/5">
              <HTMLContent
                className="max-w-screen-md mt-8 text-base text-left lg:text-lg lg:mt-16 content"
                content={introduction}
              />
              <AnchorLink
                to="/courses/#book-now"
                className="inline-flex items-center p-2 px-4 mt-2 space-x-2 text-sm text-white bg-orange-500 rounded-full group lg:text-lg arrow-link hover:bg-orange-600 focus:bg-orange-600"
              >
                <span>Book a course</span>
              </AnchorLink>
            </div>

            <div className="w-full mt-16 lg:w-3/5">
              {courses.map((course, key) => (
                <div
                  key={key}
                  className="relative mb-8 shadow-lg"
                  id={course.slug}
                >
                  <GatsbyImage
                    className="w-full h-full border-b-4 border-red-500"
                    image={course.image.gatsbyImageData}
                    alt={course.image.alt ? course.image.alt : "Vita Training"}
                  />
                  <div className="relative p-8 lg:p-16">
                    <h2 className="text-lg text-red-500 lg:text-xl">
                      {course.title}
                    </h2>
                    <HTMLContent
                      className="text-sm lg:text-base content"
                      content={course.content}
                    />

                    <div className="flex flex-col items-start space-y-4">
                      <AnchorLink
                        to="/courses/#book-now"
                        className="inline-flex items-center p-2 px-4 mt-2 space-x-2 text-sm text-white bg-orange-500 rounded-full group lg:text-lg arrow-link hover:bg-orange-600 focus:bg-orange-600"
                      >
                        <span>Book this individual course</span>
                      </AnchorLink>
                      <ArrowLink
                        destination={"/contact-us/"}
                        text="Contact us for group options"
                        className="text-gray-800 bg-gray-100 hover:bg-gray-300 focus:bg-gray-300"
                      />
                      <div className="absolute bottom-0 right-0 w-48 text-gray-800 pointer-events-none opacity-10">
                        <Vprint />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Booking widget */}

      <div id="book-now" className="p-8 bg-white lg:p-16">
        <div className="mx-auto max-w-screen-3xl">
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-8 md:flex-row">
            <div className="w-full md:w-40 text-red-500">
                <Vprint />
            </div>
            <div class="w-full md:w-auto">
            <h2 className="mb-8 text-lg lg:text-xl">Book now</h2>
            <HTMLContent
              className="max-w-screen-md mb-8 text-base text-left lg:text-base content"
              content={bookNowIntroduction}
            />
            </div>
          </div>
          <iframe src="https://www.tickettailor.com/all-tickets/vitatraining/?widget=true&amp;ref=website_widget&amp;minimal=true&amp;show_logo=false&amp;bg_fill=false" frameBorder="0" scrolling="yes" className="w-full pt-4 bg-gray-100 shadow-lg lg:pt-8 h-screen-7/10"></iframe>
        </div>
      </div>

      {/* Testimonials */}

      <div className="p-8 bg-white lg:p-16" id="testimonials">
        <div className="mx-auto max-w-screen-3xl">
          <h2 className="mb-8 text-lg lg:text-xl">{testimonialsTitle}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 lg:gap-16">
            {testimonials.map((testimonial, key) => (
              <div
                key={key}
                className={
                  "relative mb-8 shadow-lg testimonial-item p-8 lg:p-16 " +
                  (key % 2 === 0 ? null : "bg-red-500 bg-opacity-5")
                }
              >
                <span className="absolute top-0 right-0 text-3xl text-red-500 pointer-events-none lg:mt-2 lg:mr-2">
                  <RiChatQuoteFill />
                </span>
                <HTMLContent
                  className="text-sm lg:text-base content"
                  content={testimonial.content}
                />
                {testimonial.jobTitle ? (
                  <p className="mt-4 text-base text-red-500 lg:text-lg">
                    {testimonial.jobTitle}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CoursesPage
