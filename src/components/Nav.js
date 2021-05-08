import React from "react"
import { Link } from "gatsby"
import { GoLinkExternal } from "react-icons/go"
import Subnav from "./Subnav"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Nav = class extends React.Component {
  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }

  render() {
    const menuActive = this.state.showMenu ? "is-active" : ""
    const burgerActive = this.state.showMenu ? "is-active" : ""

    return (
      <nav className="lg:flex lg:content-end lg:justify-end lg:flex-col">
        <div
          className={`navigation-wrapper p-16 md:p-0 text-xl md:text-base xl:text-lg z-20 bg-red-500 md:bg-transparent navigation-wrapper--${menuActive}`}
        >
          <ul className="md:flex md:w-full md:flex-row md:items-center md:justify-start md:space-x-4 xl:space-x-12">
            <li onClick={this.toggleMenu}>
              <Link
                className="py-2 text-white navigation-wrapper__link"
                activeClassName="is-active"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="relative group" onClick={this.toggleMenu}>
              <Link
                className="py-2 text-white navigation-wrapper__link courses-link"
                activeClassName="is-active"
                to="/courses/"
              >
                Courses
              </Link>
              <Subnav />
            </li>
            <li onClick={this.toggleMenu}>
              <Link
                className="py-2 text-white navigation-wrapper__link"
                activeClassName="is-active"
                to="/our-team/"
              >
                Our Team
              </Link>
            </li>
            <li onClick={this.toggleMenu}>
              <Link
                className="py-2 text-white navigation-wrapper__link"
                activeClassName="is-active"
                to="/contact-us/"
              >
                Contact Us
              </Link>
            </li>
            <li onClick={this.toggleMenu}>
              <a
                target="_blank"
                className="flex flex-row items-center py-2 space-x-2 text-white navigation-wrapper__link"
                rel="noopener noreferrer"
                href="https://vita-network.com/"
              >
                <span>VITA Network</span> <GoLinkExternal />
              </a>
            </li>
            <li>
              <AnchorLink
                to="/courses/#book-now"
                className="inline-flex items-center p-2 px-4 space-x-2 text-sm text-white bg-orange-500 rounded-full group lg:text-lg arrow-link hover:bg-orange-600 focus:bg-orange-600"
              >
                <span>Book now</span>
              </AnchorLink>
            </li>
          </ul>
        </div>
        <div
          aria-label="Navigation menu button"
          tabIndex={0}
          role="button"
          className={`${burgerActive} navigation-button z-30`}
          onClick={this.toggleMenu}
          onKeyDown={this.toggleMenu}
        >
          <div className={`navigation-button__inside ${burgerActive}`}>
            <span className="left-0 navigation-button__lines navigation-button__line-1"></span>
            <span className="left-0 mt-2 navigation-button__lines navigation-button__line-2"></span>
            <span className="left-0 mt-4 navigation-button__lines navigation-button__line-3"></span>
            <span className="right-0 navigation-button__lines navigation-button__line-4"></span>
            <span className="right-0 mt-2 navigation-button__lines navigation-button__line-5"></span>
            <span className="right-0 mt-4 navigation-button__lines navigation-button__line-6"></span>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
