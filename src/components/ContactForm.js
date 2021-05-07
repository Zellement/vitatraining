import React from "react"
import SimpleReactValidator from "simple-react-validator"
import { navigateTo } from "gatsby-link"
import { ArrowRight } from "./icons/Arrows"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email_telephone: "",
      message: ""
    }
    this.validator = new SimpleReactValidator({
      className:
        "absolute z-20 top-0 right-0 text-2xl text-gray-800 leading-none -mt-1 -mr-1 p-1 px-2",
      messages: {
        default: "*",
      },
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    if (this.validator.allValid()) {
      const form = e.target
      this.setState({
        submitting: true,
      })

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...this.state,
        }),
      })
        .then(() => navigateTo(form.getAttribute("action")))
        .catch((error) => alert(error))
    } else {
      this.validator.showMessages()
      this.forceUpdate()
    }
    e.preventDefault()
  }

  render() {
    return (
      <form
        className="text-black form"
        name="quick-contact"
        method="post"
        action="/thank-you"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        {/* <p hidden>
                Don't fill this out:{" "} */}
        <label className="hidden">
          Do not fill this in
          <input name="bot-field" />
        </label>
        {/* </p> */}
        <div className="flex flex-col">
          <label className="relative flex w-full p-1">
            <input
              className="flex-grow p-4 text-gray-800 placeholder-gray-400 bg-gray-100"
              placeholder="Name"
              type="text"
              name="name"
              onChange={this.handleChange}
            />
            {this.validator.message("name", this.state.name, "required")}
          </label>
          <label className="relative flex w-full p-1">
            <input
              className="flex-grow p-4 text-gray-800 placeholder-gray-400 bg-gray-100"
              placeholder="Email or telephone"
              type="text"
              name="email_telephone"
              onChange={this.handleChange}
            />
            {this.validator.message(
              "email_telephone",
              this.state.email_telephone,
              "required"
            )}
          </label>
          <label className="relative flex flex-1 p-1">
            <textarea
              className="flex-grow h-48 p-4 text-gray-800 placeholder-gray-400 bg-gray-100"
              placeholder="Message"
              type="text"
              name="message"
              onChange={this.handleChange}
            >
            {this.validator.message(
              "message",
              this.state.message,
              "required"
            )}
            </textarea>
          </label>
          <span className="flex flex-1 p-1 max-w-100">
            <button
              className="inline-flex items-center mt-2 group space-x-2 text-lg group arrow-link"
              type="submit"
            >
                <span className="inline-block font-bold transition-all flex-grow flex group-hover:pr-4">Send message</span> <ArrowRight className="max-w-16" />
            </button>
          </span>
        </div>
      </form>
    )
  }
}
