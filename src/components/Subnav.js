import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Subnav() {
  const data = useStaticQuery(graphql`
    query {
      datoCmsOurCoursesPage {
        courses {
          title
          slug
        }
      }
    }
  `)

  return (
    <>
      <ul className="flex flex-col mb-4 space-y-2 text-base transform md:scale-0 subnav hover:block md:absolute md:m-0 md:top-full md:left-1/2 md:-translate-x-1/2 md:w-72 md:bg-white md:p-4 md:rounded md:shadow-lg focus-within:scale-100 group-hover:scale-100 group-focus:scale-100 lg:mb-0">
        {data.datoCmsOurCoursesPage.courses.map((navitem, key) => (
          <li key={key}>
            <AnchorLink className="text-orange-200 hover:text-red-500 focus:text-red-500 md:text-gray-900" to={"/courses/#" + navitem.slug }>
              <span>{navitem.title}</span>
            </AnchorLink>
          </li>
        ))}
          <li>
            <AnchorLink className="text-orange-200 hover:text-red-500 focus:text-red-500 md:text-gray-900" to={"/courses/#book-now" }>
              <span>Book Now</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="text-orange-200 hover:text-red-500 focus:text-red-500 md:text-gray-900" to={"/courses/#testimonials" }>
              <span>Testimonials</span>
            </AnchorLink>
          </li>
      </ul>
    </>
  )
}
