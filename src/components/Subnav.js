import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function Subnav() {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsCourse {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)
  return (
    <>
      <ul className="flex flex-col space-y-2 text-base subnav md:hidden hover:block md:absolute md:m-0 md:top-full md:left-1/2 md:-translate-x-1/2 md:transform md:w-72 md:bg-white md:p-4 md:rounded md:shadow-lg">
        {data.allDatoCmsCourse.edges.map((navitem, key) => (
          <li key={key}>
            <AnchorLink className="text-orange-200 hover:text-red-500 focus:text-red-500 md:text-gray-900" to={"/courses/#" + navitem.node.slug }>
              <span>{navitem.node.title}</span>
            </AnchorLink>
          </li>
        ))}
          <li>
            <AnchorLink className="text-orange-200 hover:text-red-500 focus:text-red-500 md:text-gray-900" to={"/courses/#testimonials" }>
              <span>Testimonials</span>
            </AnchorLink>
          </li>
      </ul>
    </>
  )
}
