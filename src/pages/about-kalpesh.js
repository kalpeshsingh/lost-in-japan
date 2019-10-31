import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header/Header"
import Jumbotron from "../components/Jumbotron/Jumbotron"
import "./About.css"
import PAGE_TYPE from "../core/constants/pageType"

const About = () => (
  <Layout type={PAGE_TYPE.ABOUT}>
    <SEO title="About Kalpesh" />
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
      <div className="about-section__author">
        <p>Hello reader, I'm Kalpesh Singh.</p>
        <p>
          This website is built for you. You to learn about Japan and read my
          experiences to make your trip better.
        </p>
        <p>
          I have planned, visited and maximized my experiences in India doing
          few solo trips. These trips include Ladakh, Andaman Islands, Meghalaya
          and many more.
        </p>
        <p>
          A year and few months back I moved to Bengaluru to join Amazon as
          Software Engineer. At that time, I decided that I should make one more
          bold move and go for my first International travel and that too solo
          in a country where food and language will be a challenge. That's how I
          decided Japan 🇯🇵.
        </p>
        <p>
          I was always interested in Japaneses culture and{" "}
          <a
            href="https://www.youtube.com/channel/UCqwxJts-6yF33rupyF_DCsA"
            target="_blank"
          >
            this,
          </a>
          <a
            href="https://www.youtube.com/channel/UCHL9bfHTxCMi-7vfxQ-AYtg"
            target="_blank"
          >{" "}
            this
          </a>{" "}
          and few random videos and channels on YouTube were always educational
          and inspired to me go to this country and gain first hand experience.
        </p>
        <p>
          I put my energy, time and few dollars to bring this website and
          information to you. I don't mind if you buy me a cup of coffee.
        </p>
        <p>
          In case you want to connect or have additional questions, feel free to
          @ me on{" "}
          <a href="https://twitter.com/knowkalpesh" target="_blank">
            Twitter
          </a>{" "}
          or if you are in Bengaluru then let's meet and share stories over
          beers or coffee.
        </p>
      </div>
      <div className="about-section__thumbnail"></div>
    </div>
  </Layout>
)

export default About
