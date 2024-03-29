/** 3P dependency imports */
import React from "react"
import { Link } from "gatsby"

/** Component dependencies */
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import Header from "../../../components/Header"
import FooterBreadcrumb from "../../../components/FooterBreadcrumb"

/** constants **/
import PAGE_TYPE from "../../../core/constants/pageType"

/** styles **/
import "../../stories.css"
import List from "../../../components/List/List"
import Heading from "../../../components/Heading"

const Documentation = () => (
  <Layout type={PAGE_TYPE.STORY}>
    <SEO title="Documentations | Preparation" />
    <Header />
    <div className="page-container">
      <aside className="page-container__left">
        <div className="page-container__left-list-title">Documentations</div>
        <ul className="page-container__left-list">
          <li>
            <a href="#important-documents">Important documents</a>
          </li>
          <li>
            <a href="#visa-documents">Visa documents</a>
          </li>
        </ul>
        <div className="page-container__ts">4 minute read time </div>
      </aside>
      <div className="page-container__right">
        <p>
          Documentations are the vital part of your trip. Based on the
          information you record in these documents will help you to assess
          whether you will enjoy your trip safely or you might need to call off.
        </p>

        <h2 id="important-docs" className="page-container__heading">
          Important documents
        </h2>

        <ul>
          <li>
            <Heading level={4}>Trip document</Heading>
            Trip document has your basic details such as your name, address,
            emergency contacts, blood group, etc. It is vital as I’m ‘O’
            negative blood human and in case of any emergency they can arrange
            for blood. The same goes for any other medical emergency or
            situation where your basic information is required. Please see{" "}
            <Link to={"/resources/"}>Resources</Link> section to download the
            sample.
          </li>

          <li>
            <Heading level={4}>Weather</Heading>
            It is always good to prepare a document or know weather conditions a
            few days prior and on your journey dates. I made a mistake and went
            to summer in peak Typhoon season. Lesson learned here.
            <br />
            Avoid going to Japan in August and September or you will face 36
            degrees and there is always the danger of typhoons.
          </li>
          <li>
            <Heading level={4}>Day by day itinerary</Heading>
            Prepare a detailed itinerary and help yourself by avoiding last
            moment confusion and decision making. I visited Japan without any
            accommodation and trip itinerary. It was always difficult to decide
            and go to places without this. It’s not bravery, it’s stupidity.
          </li>
          <li>
            <Heading level={4}>Things to do with priority assigned</Heading>
            List down all the activities/experiences you want to cover when you
            are there. I wanted to try Capsule hotels and Onsen. I assigned
            priority to them and I completed these two experiences. The priority
            is rough and can help you in a situation where you want to give up a
            few experiences (happens when you travel). I wanted to get ink and
            then realized that it might be unpleasant for Japanese.
            <br /> <br />
            <List
              list={[
                "Please be careful and respectful about foreign country's cultural values.",
              ]}
            />
          </li>
        </ul>

        <h2 id="visa-documents" className="page-container__heading">
          Visa documents
        </h2>

        <p>
          Following are the visa documents you will need to submit to the
          Consulate General of Japan or Embassy of Japan. I applied in Bengaluru
          and the process was smooth and you will find helpful Indian staff.
        </p>

        <p>
          You don’t need to make an appointment, you can directly walk-in and
          submit your documents.{" "}
        </p>

        <p>
          After 7 days or a given date, you can collect the passport from the
          same place. Though the timing for submitting visa application and
          collection is different.
        </p>

        <p>Good news! There is no interview for your tourist visa.</p>

        <ol>
          <li>
            Passport should be valid for at least three months from the date of
            expiry of visa with more than 2 blank pages{" "}
          </li>
          <li>
            Visa{" "}
            <a href="https://www.vfsglobal.com/japan/india/delhi/pdf/visa-application.pdf">
              application form
            </a>{" "}
            to be filled and signed by the applicant
          </li>
          <li>
            Two recent color photographs with following specification -
            <ul>
              <li>Matt finish</li>
              <li>45x45 mm</li>
              <li>White background</li>
              <li>80% face coverage</li>
            </ul>
          </li>
          <li>Cover letter stating purpose and duration of the stay</li>
          <li>Tour itinerary</li>
          <li>Proof of airlines reservation of return trip</li>
          <li>
            Proof of accommodation including name and phone number of hotel
          </li>
          <li>Bank statement of last 6 months</li>
          <li>ITR (Income Tax Return) of last 3 years</li>
          <li>3 months company's salary slip</li>
          <li>Copy of PAN card or any other central government ID</li>
          <li>Address proof (I brought my Driving License)</li>
        </ol>
        <p>
          All the sample documents are downloadble from{" "}
          <Link to={"/resources/"}>Resources</Link> section.
        </p>

        <List
          list={[
            "Always check if your prints are fitted on paper and not cut. My 30 pages bank statement was cut by one column and I re-printed it again.",
            "Go to the consulate/embassy early in the morning, I went at 9:00 AM. The business begins at 08:30 AM.",
            "The rental agreement is not considered as your proof. Please take other documents.",
          ]}
        />
        <FooterBreadcrumb
          left={{
            link: "/preparation/before-you-go",
            label: "Before you go",
          }}
          right={{
            link: "/preparation/exit-tourism",
            label: "Exit tourism",
          }}
        />
      </div>
    </div>
  </Layout>
)

export default Documentation
