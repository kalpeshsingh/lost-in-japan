/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Jumbotron from "./Jumbotron"
import HighlightedText from "./HighlightedText"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Header />
      <Jumbotron
        title={"Read Kalpesh’s Japan experiences."}
        subtitle={
          <>
            <HighlightedText>3</HighlightedText> cities,&nbsp;
            <HighlightedText>11</HighlightedText> days and unlimited memories.
          </>
        }
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        {/*<footer>*/}
        {/*© {new Date().getFullYear()}, Built with*/}
        {/*{` `}*/}
        {/*<a href="https://www.gatsbyjs.org">Gatsby</a>*/}
        {/*</footer>*/}
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
