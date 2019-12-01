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
import googleDocs from "../images/google_doc.png"
import googleSheets from "../images/google_sheets.png"

/** styles */
import "./resources.css"
import AlertBox, { ALERT_TYPES } from "../components/AlertBox"

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
      visit <Link to={"/preparation/before-you-go#visa"}>Before you go</Link>{" "}
      page.
    </div>

    <section className="resources__download-section">
      <a
        className="resources__icon"
        href="https://docs.google.com/document/d/1oQZDi0CW4yj0IFeK5fpA78tEzMAfRDShfWZl9j-CSmY/edit?usp=sharing"
        target="_blank"
      >
        <figure>
          <img src={googleDocs} />
          <figcaption>Itinerary in Japan</figcaption>
        </figure>
      </a>
      <div>
        <h4 className="resources__download-title">
          <a
            href="https://docs.google.com/document/d/1oQZDi0CW4yj0IFeK5fpA78tEzMAfRDShfWZl9j-CSmY/edit?usp=sharing"
            target="_blank"
          >
            Itinerary Document
          </a>
        </h4>
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
          <figcaption>Cover Letter</figcaption>
        </figure>
      </a>
      <div>
        <h4 className="resources__download-title">
          <a
            href="https://docs.google.com/document/d/180v7bTRHYKchHHBvb1RSqY1TrAXgmY0WQAuuHEKqRlQ/edit?usp=sharing"
            target="_blank"
          >
            Cover Letter
          </a>
        </h4>
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
    <section className="resources__download-section">
      <a
        className="resources__icon"
        href="https://docs.google.com/document/d/1_r0x4qVW2SKzYSE3TiujXAGEwd4U1UU99sB3DN2Wa64/edit?usp=sharing"
        target="_blank"
      >
        <figure>
          <img src={googleDocs} />
          <figcaption>Japan Trip</figcaption>
        </figure>
      </a>
      <div>
        <h4 className="resources__download-title">
          <a
            href="https://docs.google.com/document/d/1_r0x4qVW2SKzYSE3TiujXAGEwd4U1UU99sB3DN2Wa64/edit?usp=sharing"
            target="_blank"
          >
            Japan Trip
          </a>
        </h4>
        <div className="resources__download-desc">
          I call it as Trip document which should be with you in your backpack
          always. In case you need help then people can or authority can make
          calls and provide you necessary help in foreign soil.
          <br />
          Please download the sample document and fill correct and maximum
          details.
        </div>
      </div>
    </section>
    <section className="resources__download-section">
      <a
        className="resources__icon"
        href="https://docs.google.com/spreadsheets/d/1uPJ6KXjpHkMSQtjjd__mAMqOuCqIKhXq8nsHIHU6rD0/edit?usp=sharing"
        target="_blank"
      >
        <figure>
          <img src={googleSheets} />
          <figcaption>Things to do in Japan</figcaption>
        </figure>
      </a>
      <div>
        <h4 className="resources__download-title">
          <a
            href="https://docs.google.com/spreadsheets/d/1uPJ6KXjpHkMSQtjjd__mAMqOuCqIKhXq8nsHIHU6rD0/edit?usp=sharing"
            target="_blank"
          >
            Things to do in Japan
          </a>
        </h4>
        <div className="resources__download-desc">
          I created this document to give priority to things I want to do. This
          helped me to experience what are absolutely required.
          <br />
          Please download the sample document and enter things you think will
          maximize your experience in Japan and assign priority.
        </div>
      </div>
    </section>
    <section className="resources__download-section">
      <a
        className="resources__icon"
        href="https://docs.google.com/spreadsheets/d/1o-aSVlBy87QuuePeO84kwoJTmtCZf_0v_LXwDtLrO4w/edit?usp=sharing"
        target="_blank"
      >
        <figure>
          <img src={googleSheets} />
          <figcaption>Things needed</figcaption>
        </figure>
      </a>
      <div>
        <h4 className="resources__download-title">
          <a
            href="https://docs.google.com/spreadsheets/d/1o-aSVlBy87QuuePeO84kwoJTmtCZf_0v_LXwDtLrO4w/edit?usp=sharing"
            target="_blank"
          >
            Things needed
          </a>
        </h4>
        <div className="resources__download-desc">
          This document is refined over time and seems like close to my ultimate
          document to refer when I go for domestic trips. You must add things
          that are needed as per the destination country. These are basic things
          irrespective of country or whether.
        </div>
      </div>
    </section>
  </Layout>
)

export default Resources
