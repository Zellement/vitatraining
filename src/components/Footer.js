import React from "react"
import { Link } from "gatsby"
import Social from "../components/Social"
import Vprint from "./atoms/VPrint"

export default function Footer() {
  const getDate = new Date()
  const getYear = getDate.getFullYear()
  return (
    <footer className="relative p-8 pt-24 text-gray-900 bg-gray-200 bg-gradient-to-t from-gray-100 lg:p-16">
      <div className="relative z-10 mx-auto max-w-screen-3xl">
        <p>
          © VITA Training Ltd {getYear}. All Rights Reserved |{" "}
          <Link
            className="hover:text-orange-700 focus:text-orange-700"
            to="/cookie-policy/"
          >
            Cookie Policy
          </Link>{" "}
          |{" "}
          <Link
            className="hover:text-orange-700 focus:text-orange-700"
            to="/privacy-policy/"
          >
            Privacy Policy
          </Link>
        </p>

        <div className="flex flex-row mt-8 space-x-4 text-lg">
          <Social iconClasses="text-gray-500 hover:text-orange-700 focus:text-orange-700" />
        </div>
      </div>
        <span className="absolute bottom-0 right-0 w-48 mt-2 mr-2 text-3xl text-gray-300 pointer-events-none">
          <Vprint />
        </span>
    </footer>
  )
}
