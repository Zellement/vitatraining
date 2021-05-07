import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Seo from "../components/Seo"
import { HTMLContent } from "../components/Content"

const PrivacyPolicyPage = () => {
  const data = useStaticQuery(graphql`
    query PrivacyPolicyQuery {
      datoCmsPrivacyPolicyPage {
        content
      }
    }
  `)
  return (
    <>
      <Seo title="Privacy Policy" />

      {/* Main Content */}

      <div className="p-8 bg-white lg:p-16">
        <div className="max-w-screen-md mx-auto">
          <HTMLContent
            className="relative z-10 text-base lg:text-lg content"
            content={data.datoCmsPrivacyPolicyPage.content}
          />
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicyPage
