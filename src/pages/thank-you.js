import React from "react"
import Seo from "../components/Seo"

const ThankYouPage = () => (
  <>
    <Seo title="Thank You!" />
    
      {/* Main Content */}

      <div className="p-8 bg-white lg:p-16">
        <div className="max-w-screen-md mx-auto">
          <h1>Thank You!</h1>
          <p>Thank you for contacting us - we'll get in touch soon.</p>
          <p>Please <a href="/">go to the homepage</a>.</p>
        </div>
      </div>
  </>
)

export default ThankYouPage
