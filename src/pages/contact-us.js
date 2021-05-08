import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Seo from "../components/Seo"
import { HTMLContent } from "../components/Content"
import ContactForm from "../components/ContactForm"
import Social from "../components/Social"
import { GrMail } from "react-icons/gr"
import Hero from "../components/Hero"

const ContactUsPage = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      datoCmsGlobal {
        emailAddress
      }
      datoCmsContactPage {
        heroMinor
        heroMajor
        introduction
      }
    }
  `)

  const { heroMinor, heroMajor, introduction } = data.datoCmsContactPage

  return (
    <>
      <Seo title="Contact Us" />

      {/* Hero */}

      <Hero
        heroMinor={heroMinor}
        heroMajor={heroMajor}
        wrapperClasses="max-w-screen-xl p-8 mx-auto text-center text-white md:p-16"
      />

      {/* Main Content */}

      <div className="p-8 bg-white lg:p-16">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col gap-8 mx-auto md:flex-row md:grid-cols-2">
            <div className="w-full md:w-1/3">
              {introduction ? (
                <HTMLContent
                  className="text-base lg:text-lg"
                  content={introduction}
                />
              ) : null}

              <a
                className="flex flex-row items-center mt-8 space-x-2 text-lg lg:mt-16 hover:text-orange-500 focus:text-orange-500"
                href={"mailto:" + data.datoCmsGlobal.emailAddress}
              >
                <GrMail /> <span>{data.datoCmsGlobal.emailAddress}</span>
              </a>

              <div className="flex flex-row mt-8 space-x-6 text-2xl lg:mt-16">
                <Social iconClasses="hover:text-orange-500 focus:text-orange-500 w-6 h-6" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsPage
