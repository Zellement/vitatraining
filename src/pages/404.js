import React from "react"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <>
    <Seo title="Sorry, page not found" />
    
      {/* Main Content */}

      <div className="p-8 bg-white lg:p-16">
        <div className="max-w-screen-md mx-auto">
          <h1>Sorry!</h1>
          <p>This page can't be found. Please <a href="/">go to the homepage</a>.</p>
        </div>
      </div>
  </>
)

export default NotFoundPage
