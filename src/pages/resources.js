/** 3P dependency imports */
import React from "react"

/** Component dependencies */
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header/Header"

/** constants **/
import PAGE_TYPE from "../core/constants/pageType"

/** styles */
import "./resources.css"
import AlertBox, { ALERT_TYPES } from "../components/AlertBox/AlertBox"

const Resources = () => (
  <Layout type={PAGE_TYPE.ABOUT}>
    <SEO title="Resources" />
    <Header />
    <h1 className="resources__title">Resources</h1>
    <h4 className="resources__subtitle">
      A collection of all the necessary documents and downloadable that will
      help you in applying for a visa with ease.
    </h4>
    <AlertBox type={ALERT_TYPES.WARN}>
      All this information or documents are here to help you and it's your
      responsibility to produce correct and legit documents to consulate,
      embassy or visa issuing authorities. These documents and information are
      to guide you and don't guarantee a Japanese visa. Please re-verify all the
      information and document needed on the Japanese government website before
      you appear for your visa application.
    </AlertBox>
  </Layout>
)

export default Resources
