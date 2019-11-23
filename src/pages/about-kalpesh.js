/** 3P dependency imports */
import React from "react"
//import { Link } from "gatsby"

/** Component dependencies */
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header/Header"
import Jumbotron from "../components/Jumbotron/Jumbotron"

/** constants **/
import PAGE_TYPE from "../core/constants/pageType"

/** styles */
import "./About.css"

const About = () => (
  <Layout type={PAGE_TYPE.ABOUT}>
    <SEO title="About" />
    <Header />
    <Jumbotron
      title={"About"}
      subtitle={
        <>
          Kalpesh{" "}
          <span className="about__san" lang={"ja"}>
            さん
          </span>
        </>
      }
    />
    <div className="about-section">
      <div className="about-section__thumbnail"></div>
      <div className="about-section__author">
        <p>Hello reader, I'm Kalpesh Singh.</p>
        <p>
          I have been solo traveling for last 4 years. I have visited Ladakh,
          Andaman Islands, Meghalaya, Rajasthan, Kerala and many more. I have
          planned, visited and maximized my experiences in India doing a few
          solo trips.
        </p>

        <p>
          So this time I got to apply my travel expertise for my first International travel. I
          hope this guide will help you to learn about Japan and my
          experiences will help you to plan your trip better.
        </p>

        <p>
          In August 2018, I joined Amazon as Frontend Engineer and moved to
          Bengaluru. At that time, I decided that I should make one more bold
          move and go for my first international travel in a country where food
          and language will be a challenge. That's how I decided to go to Japan
          🇯🇵.
        </p>
        <p>
          I was always interested in Japanese culture and{" "}
          <a
            href="https://www.youtube.com/channel/UCqwxJts-6yF33rupyF_DCsA"
            target="_blank"
          >
            this,
          </a>
          <a
            href="https://www.youtube.com/channel/UCHL9bfHTxCMi-7vfxQ-AYtg"
            target="_blank"
          >
            {" "}
            this
          </a>{" "}
          and a few other videos and channels on YouTube were always educational
          and inspired me to go to this country and see it for myself.
        </p>
        <p>
          I bring this information on expense of my time and energy and I don't
          mind if you buy me a coffee.
        </p>
        <p>
          Do connect or have additional questions, feel free to @ me on{" "}
          <a href="https://twitter.com/knowkalpesh" target="_blank">
            Twitter
          </a>{" "}
          or if you are in Bengaluru then let's meet and share stories over
          <span role="img" aria-label="beers">
            🍻
          </span>{" "}
          or{" "}
          <span role="img" aria-label="coffee">
            ☕
          </span>{" "}
          and{" "}
          <span role="img" aria-label="pizza">
            🍕
          </span>
          .
        </p>
      </div>
    </div>
  </Layout>
)

export default About
