import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "../styles/main.css"

const Layout = ({ children, location }) => {
  return (
    <>
      <div className="relative">
        <Header siteTitle="Vita Training" />
        <main key={location.pathname}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
