/** 3P dependency imports */
import React from "react"
import { Link } from "gatsby"

/** Component dependencies */
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header/Header"

/** constants **/
import PAGE_TYPE from "../core/constants/pageType"

/** icons  **/
import googleDocs from "../images/google_doc.svg"

/** styles */
import "./resources.css"
import AlertBox, { ALERT_TYPES } from "../components/AlertBox/AlertBox"

const Resources = () => (
  <Layout type={PAGE_TYPE.ABOUT}>
    <SEO title="Resources" />
    <Header />
    <h1 className="resources__title">Resources</h1>
    <h2 className="resources__subtitle">
      A collection of all the necessary documents and downloadable that will
      help you in applying for a visa with ease.
    </h2>
    <AlertBox className="resources__alertBox" type={ALERT_TYPES.WARN}>
      All this information or documents are here to help you and it's your
      responsibility to produce correct and legit documents to consulate,
      embassy or visa issuing authorities. These documents and information are
      to guide you and don't guarantee a Japanese visa. Please re-verify all the
      information and document needed on the Japanese government website before
      you appear for your visa application submission.
      <br />
      The description of documents are based on my understanding and might not
      align with Japanese government.
    </AlertBox>

    <div className="resources__hint">
      If you looking for how to apply or document needed for visa then please
      visit <Link to={"/before-you-visit-japan"}>Before you go</Link> page.
    </div>

    <section className="resources__download-section">
      <a
        className="resources__icon"
        href="https://docs.google.com/document/d/1oQZDi0CW4yj0IFeK5fpA78tEzMAfRDShfWZl9j-CSmY/edit?usp=sharing"
        target="_blank"
      >
        <figure>
          <img src={googleDocs} />
          <figcaption>[SAMPLE] Itinerary in Japan</figcaption>
        </figure>
      </a>
      <div>
        <h4 className="resources__download-title">Itinerary Document</h4>
        <div className="resources__download-desc">
          This document helps the visa officer to know that you are genuinely
          interested to explore these places in Japan. You did your research and
          in case of emergency, they can find you with details provided by in
          this document.
          <br />
          Please download the sample document and fill the correct information.
        </div>
      </div>
    </section>
    <section className="resources__download-section">
      <a
        className="resources__icon"
        href="https://docs.google.com/document/d/180v7bTRHYKchHHBvb1RSqY1TrAXgmY0WQAuuHEKqRlQ/edit?usp=sharing"
        target="_blank"
      >
        <figure>
          <img src={googleDocs} />
          <figcaption>[SAMPLE] Cover Letter</figcaption>
        </figure>
      </a>
      <div>
        <h4 className="resources__download-title">Cover Letter</h4>
        <div className="resources__download-desc">
          This document act as a request to visa authority to provide you a visa
          for the stated purpose and give you a chance to provide additional
          information or make your case strong by adding the necessary
          information.
          <br />
          Please download the sample document and fill the necessary
          information.
        </div>
      </div>
    </section>
  </Layout>
)

export default Resources
