/** 3P dependency imports */
import React from "react"

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

const ExitTourism = () => (
  <Layout type={PAGE_TYPE.STORY}>
    <SEO title="Exit Tourism | Preparation" />
    <Header />
    <div className="page-container">
      <aside className="page-container__left">
        <div className="page-container__left-list-title">Exit Tourism</div>
        <ul className="page-container__left-list"></ul>
        <div className="page-container__ts">54 sec read time </div>
      </aside>
      <div className="page-container__right">
        <p>
          I’m trying to live a minimalist life and when it comes to shopping, I
          have to choose stuff very carefully as it will pile and will break my
          vision of being minimalist. I wanted to buy a trouser and I found that
          I can buy in Japan which will be useful in daily life as savourer. I
          didn't buy in Japan for others. Though I bought one big and one small
          bottle of sake. Keep your shopping and purchase at the end of two
          days. As it was an 11 days trip and I thought I will spend two days at
          my place to do the shopping and also will visit a few places. In my
          plan, I already came to know about 8% of consumer tax benefits to
          tourism in Japan. It was pretty straightforward and I took the
          benefit. (Though added a fitness band to save 250 INR. Agh! Minimalist
          life.)
        </p>
        <p>
          Derma recommended me Uniqlo (Japanese clothing brand) which sells
          reasonably priced clothes. I bought a fantastic trouser and I’m
          wearing one while writing.
        </p>

        <List
          list={[
            "Don’t promise people to purchase stuff abroad",
            "See if you can match the shopping with your current needs",
            "Research on stuff if they are allowed on the airplane",
            "Always tell shoppers that you will take it back to the home\n" +
              "              country so that they can do extra packing",
          ]}
        />
        <FooterBreadcrumb
          left={{
            link: "documentation",
            label: "Documentation",
          }}
        />
      </div>
    </div>
  </Layout>
)

export default ExitTourism
