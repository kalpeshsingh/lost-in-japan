/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/** 3P dependency imports */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

/** styles */
import "./layout.css"

const Layout = ({ children, type }) => {
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
    <div className={type}>
      <main>{children}</main>
      {/*<footer>*/}
      {/*© {new Date().getFullYear()}, Built with*/}
      {/*{` `}*/}
      {/*<a href="https://www.gatsbyjs.org">Gatsby</a>*/}
      {/*</footer>*/}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
