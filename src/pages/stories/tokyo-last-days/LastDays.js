/** 3P dependency imports */
import React from "react"

/** Component dependencies */
import Layout from "./../../../components/layout"
import SEO from "./../../../components/seo"
import Header from "./../../../components/Header/Header"

/** constants **/
import PAGE_TYPE from "./../../../core/constants/pageType"


/** styles **/
import "./../stories.css"

const Kyoto = () => (
  <Layout type={PAGE_TYPE.STORY}>
    <SEO title="Osaka | Stories" />
    <Header />
    <div className="page-container">
      <aside className="page-container__left">
        <div className="page-container__left-list-title">Tokyo, 2 days</div>
        <ul className="page-container__left-list">
          <li>
            <a href="#day4">Day 10</a>
          </li>
          <li>
            <a href="#day5">Day 11</a>
          </li>
        </ul>
        <div className="page-container__ts">44 sec read time </div>
      </aside>
      <div className="page-container__right">
        <h2 id="day10" className="page-container__heading">
          Day 10{" "}
        </h2>
        <p>No entry</p>

        <h2 id="day11" className="page-container__heading">
          Day 11{" "}
        </h2>

        <p>No entry</p>
        <hr />

        <p>
          I’m bored in Japan or I'm bored with traveling. I learned new things
          and believe me I'm a better person now.
          <br />
          On this trip, I came to know that I have to work on a few more points
          and I believe I will cover them on my next travel.
        </p>
        <p>
          I will soon board an overnight bus to Tokyo and spend 2 nights there.
          I will go back to India and will again experiment with my schedule. At
          least I will wake up at 06:30 AM.{" "}
        </p>
        <p>
          It was a really good time and learning experience in Japan. 🇯🇵 This
          trip was a complete success for me.{" "}
        </p>
      </div>
    </div>
  </Layout>
)

export default Kyoto
