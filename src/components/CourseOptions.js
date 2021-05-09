import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function CourseOptions() {
  const data = useStaticQuery(graphql`
    query {
      datoCmsOurCoursesPage {
        courses {
          slug
          title
        }
      }
    }
  `)

  return (
    <>
      {data.datoCmsOurCoursesPage.courses.map((navitem, key) => (
        <option value={navitem.slug} key={key}>{navitem.title}</option>
      ))}
    </>
  )
}
