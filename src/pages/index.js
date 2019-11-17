/** 3P dependency imports */
import React from "react"
//import { Link } from "gatsby"

/** Component dependencies */
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/Header"
import Jumbotron from "../components/Jumbotron"
import HighlightedText from "../components/HighlightedText"
import Card from "../components/Card"

/** constants **/
import PAGE_TYPE from "./../core/constants/pageType"

/** styles */
import "./index.css"

/** card images **/
import beforeYouGo from "./../images/japan_airline_ticket.jpg"
import duringTravel from "./../images/japan_airport_welcome_board.jpg"
import exitTourism from "./../images/tokyo_station.jpg"

import kyotoCover from "../images/kyoto_card_cover.jpg"
import osakaCover from "../images/osaka_card_cover.jpg"
import tokyoCover1 from "../images/tokyo_cover_one.jpg"
import tokyoCover2 from "../images/tokyo_cover_two.jpg"

const IndexPage = () => (
  <Layout type={PAGE_TYPE.HOMEPAGE}>
    <SEO title="Home" />
    <Header />
    <Jumbotron
      title={
        <div>
          Read Kalpesh’s Japan <div>experiences.</div>
        </div>
      }
      subtitle={
        <>
          <HighlightedText>3</HighlightedText> cities,&nbsp;
          <HighlightedText>11</HighlightedText> days and unlimited memories.
        </>
      }
    />
    <h2 className="homepage__section-title">Trip Highlights</h2>
    <ul className="homepage__section-highlights">
      <li>
        <span role="img" aria-label="Owl">
          🦉
        </span>
        Visited weird cafes (maid and owl cafe){" "}
      </li>
      <li>
        <span role="img" aria-label="Octopus">
          🐙
        </span>
        Accidentally ate octopus{" "}
      </li>
      <li>
        <span role="img" aria-label="Onsen">
          ♨️
        </span>
        <abbr title="A tradition in Japan where people take bath with others">
          Onsen
        </abbr>{" "}
        (I was the only foreigner in that public bath)
      </li>
      <li>
        {" "}
        <span role="img" aria-label="Shinkansen">
          🚅
        </span>{" "}
        Shinkansen (bullet train)
      </li>
      <li>
        {" "}
        <span role="img" aria-label="Sushi">
          🍣
        </span>{" "}
        Sushi - first dinner in Japan
      </li>
      <li>
        <span role="img" aria-label="Capsule hotel">
          🏨
        </span>
        Capsule hotel
      </li>
      <li>
        <span role="img" aria-label="Japanese bar">
          🥃
        </span>{" "}
        Authentic Japanese bar
      </li>
      <li>
        <span role="img" aria-label="saké">
          🍶
        </span>
        Tasted Shōchū and saké
      </li>
      <li>
        <span role="img" aria-label="Books shelf">
          📚{" "}
        </span>
        Largest book shelf in Osaka
      </li>
      <li>
        <span role="img" aria-label="Couchsurfing">
          🛋️{" "}
        </span>
        Couchsurfing with Taiwanese family in Tokyo for 3 days
      </li>
    </ul>
    <h2 className="homepage__section-title">Preparation</h2>
    <div className="cards">
      <Card
        title={<HighlightedText>Before you go</HighlightedText>}
        image={beforeYouGo}
        link={"/preparation/before-you-go"}
      />
      <Card
        title={<HighlightedText>Documentations</HighlightedText>}
        image={duringTravel}
        link={"/preparation/documentation"}
      />
      <Card
        title={<HighlightedText>Exit tourism</HighlightedText>}
        image={exitTourism}
        link={"/preparation/exit-tourism"}
      />
    </div>

    <h2 className="homepage__section-title">Read experiences</h2>
    <div className="cards cards--experiences">
      <Card
        title={
          <div>
            <HighlightedText>Tokyo,</HighlightedText> Day 1, 2 and 3
          </div>
        }
        image={tokyoCover1}
        link={"/stories/tokyo-3-days-stories-itinerary"}
      />
      <Card
        title={
          <div>
            <HighlightedText>Osaka,</HighlightedText> Day 4, 5 and 6
          </div>
        }
        image={osakaCover}
        link={"/stories/osaka-3-days-stories-itinerary"}
      />
      <Card
        title={
          <div>
            <HighlightedText>Kyoto,</HighlightedText> Day 7, 8 and 9
          </div>
        }
        image={kyotoCover}
        link={"/stories/kyoto-3-days-stories-itinerary"}
      />
      <Card
        title={
          <div>
            <HighlightedText>Tokyo,</HighlightedText> Day 10 and 11
          </div>
        }
        image={tokyoCover2}
        link={"/stories/tokyo-last-days"}
      />
    </div>
  </Layout>
)

export default IndexPage
