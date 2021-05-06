import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import { GatsbyImage } from "gatsby-plugin-image"
import Nav from "../components/Nav"
import Logo from "../components/atoms/Logo"

const Header = () => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      datoCmsGlobal {
        heroImage {
          gatsbyImageData(imgixParams: { w: "2000" })
          alt
        }
      }
    }
  `)
  return (
    <>
    <div className="fixed inset-0 w-full h-screen -z-10">
      <GatsbyImage
        className="object-cover w-full h-full"
        image={data.datoCmsGlobal.heroImage.gatsbyImageData}
        alt={
          data.datoCmsGlobal.heroImage.alt
            ? data.datoCmsGlobal.heroImage.alt
            : "Vita Training"
        }
      />
    </div>
      <header className="py-8 md:py-4">
        <div className="container">
          <div className="flex flex-wrap items-center ">
            <Link
              className="block w-full mx-auto text-white max-w-48 md:ml-0 md:max-w-40"
              to="/"
            >
              <Logo />
            </Link>

            <Nav />
          </div>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
