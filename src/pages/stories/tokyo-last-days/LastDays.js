/** 3P dependency imports */
import React from "react"

/** Component dependencies */
import Layout from "./../../../components/layout"
import SEO from "./../../../components/seo"
import Header from "./../../../components/Header"
import Heading from "../../../components/Heading"
import FooterBreadcrumb from "../../../components/FooterBreadcrumb"

/** constants **/
import PAGE_TYPE from "./../../../core/constants/pageType"

/** styles **/
import "../../stories.css"
import somewhereInTokyo from "../../../images/somewhere_in_tokyo.jpg"

const LastDays = () => (
  <Layout type={PAGE_TYPE.STORY}>
    <SEO title="Tokyo | Stories" />
    <Header />
    <div className="page-container">
      <aside className="page-container__left">
        <div className="page-container__left-list-title">Tokyo, 2 days</div>
        <ul className="page-container__left-list">
          <li>
            <a href="#day10">Day 10</a>
          </li>
          <li>
            <a href="#day11">Day 11</a>
          </li>
        </ul>
        <div className="page-container__ts">44 sec read time </div>
      </aside>
      <div className="page-container__right">
        <Heading level={2}>Last words from Kyoto...</Heading>

        <p>
          I learned new things in Japan and believe me I'm a better person now.
          <br />
          On this trip, I came to know that I have to work on a few more points
          and I believe I will cover them in my next travel.
        </p>
        <p>
          I will soon board an overnight bus to Tokyo and spend 2 nights there.
          I will go back to India and will again experiment with my schedule. At
          least I will wake up at 06:30 AM (I do wake now at 06:30 AM daily
          including weekends).
        </p>
        <p>
          It was a really good time and learning experience in Japan. 🇯🇵 This
          trip was a complete success for me.
        </p>
        <hr />
        <figure className="page-container__photo">
          <img src={somewhereInTokyo} />
          <figcaption>Somewhere in Tokyo</figcaption>
        </figure>
        <h2 id="day10" className="page-container__heading">
          Day 10{" "}
        </h2>
        <p>No entry</p>

        <h2 id="day11" className="page-container__heading">
          Day 11{" "}
        </h2>

        <p>No entry</p>

        <small>
          Note: I lost my enthusiasm to write which resulted in no entry on day
          10 and day 11.
        </small>

        <FooterBreadcrumb
          left={{
            link: "/stories/kyoto-3-days-stories-itinerary",
            label: "Kyoto experiences",
          }}
        />
      </div>
    </div>
  </Layout>
)

export default LastDays
