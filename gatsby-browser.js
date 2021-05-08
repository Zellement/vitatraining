
import React from "react";
import Layout from "./src/components/layout";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

// const insertJS = () => {
//   const s = document.createElement(`script`)
//   s.type = `text/javascript`
//   s.src = "https://cdn.tickettailor.com/js/widgets/min/widget.js"
//   s.setAttribute("data-url", "https://www.tickettailor.com/all-tickets/vitatraining/")
//   document.getElementsByTagName(`head`)[0].appendChild(s)

// }

// export const onInitialClientRender = () => {
//   insertJS()
// }

// export const onRenderBody = (
//   { setHeadComponents },
//   pluginOptions
// ) => {
//   setHeadComponents([
//     <script key="tickettailor" src="https://cdn.tickettailor.com/js/widgets/min/widget.js" data-url="https://www.tickettailor.com/all-tickets/vitatraining/" data-type="inline" data-inline-minimal="true" data-inline-show-logo="false" data-inline-bg-fill="false" data-inline-inherit-ref-from-url-param="" data-inline-ref="website_widget" />,
//   ])
// }

// const React = require("react")
// const Layout = require("./src/components/layout")

// exports.wrapPageElement = ({ element, props }) => {
//   return <Layout {...props}>{element}</Layout>
// }

// const HeadComponents = [
//   <script src="https://cdn.tickettailor.com/js/widgets/min/widget.js" data-url="https://www.tickettailor.com/all-tickets/vitatraining/" data-type="inline" data-inline-minimal="true" data-inline-show-logo="false" data-inline-bg-fill="false" data-inline-inherit-ref-from-url-param="" data-inline-ref="website_widget"></script>
// ]

// exports.onRenderBody = ({
//   setHeadComponents
// }, pluginOptions) => {
//   setHeadComponents(HeadComponents)
// }