import React from "react"
import { Link } from "gatsby"
import Social from "../components/Social"

export default function Footer() {
  return (
    <footer className="p-8 text-gray-900 bg-gray-200 bg-gradient-to-t from-gray-100 lg:p-16">
      <div className="container">
        <p>
          © VITA Training LTD 2018. All Rights Reserved |{" "}
          <Link
            className="hover:text-orange-700 focus:text-orange-700"
            to="/cookie-policy"
          >
            Cookie Policy
          </Link>{" "}
          |{" "}
          <Link
            className="hover:text-orange-700 focus:text-orange-700"
            to="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </p>

        <div className="flex flex-row mt-8 space-x-4 text-lg">
          <Social iconClasses="hover:text-orange-700 focus:text-orange-700" />
        </div>
      </div>
    </footer>
  )
}
