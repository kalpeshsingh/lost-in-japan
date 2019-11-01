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
    <h2 className="homepage__section-title">Preparation</h2>
    <div className="cards">
      <Card
        title={<HighlightedText>Before you go</HighlightedText>}
        image={beforeYouGo}
      />
      <Card
        title={<HighlightedText>During travel</HighlightedText>}
        image={duringTravel}
      />
      <Card
        title={<HighlightedText>Exit tourism</HighlightedText>}
        image={exitTourism}
      />
    </div>

    <h2 className="homepage__section-title">Read experiences</h2>
    <div className="cards">
      <Card
        title={
          <div>
            <HighlightedText>Tokyo,</HighlightedText> 5 days
          </div>
        }
        image={beforeYouGo}
      />
      <Card
        title={
          <div>
            <HighlightedText>Osaka,</HighlightedText> 3 days
          </div>
        }
        image={duringTravel}
      />
      <Card
        title={
          <div>
            <HighlightedText>Kyoto,</HighlightedText> 3 days
          </div>
        }
        image={exitTourism}
        link={"/stories/kyoto-3-days-stories-itinerary"}
      />
    </div>
    {/*<h1>Hi people</h1>*/}
    {/*<p>Welcome to your new Gatsby site.</p>*/}
    {/*<p>Now go build something great.</p>*/}
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
    {/*<Image />*/}
    {/*</div>*/}
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
