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
        <div className="page-container__ts">1 minute, 6 seconds</div>
      </aside>
      <div className="page-container__right">
        <p>
          I’m trying to live a minimalist life. When it comes to shopping I have
          to choose stuff very carefully as it will pile and break my vision of
          being minimalist.
        </p>
        <p>
          I needed a trouser and I realized that I can align that with shopping
          in Japan which will be useful in daily life. A souvenir I love to
          wear.
        </p>

        <p>
          I didn't buy for others (except for siblings). Though I bought one
          large and one small bottle of sake. I kept my shopping and purchases
          at the end of two days. As it was an 11 days trip and I thought I will
          spend two days in Tokyo to do the shopping and also will visit a few
          places.
        </p>

        <p>
          In my research, I already came to know about 8% of consumer tax
          benefits to tourism in Japan. It was pretty straightforward and I took
          the benefit. (Though added a fitness band to save 250 INR. Agh!
          Minimalist life.)
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
              "              country to get extra packing",
          ]}
        />
        <FooterBreadcrumb
          left={{
            link: "/preparation/documentation",
            label: "Documentation",
          }}
        />
      </div>
    </div>
  </Layout>
)

export default ExitTourism
