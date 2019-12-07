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
      <footer className="site-footer">
        &copy; All the information and photos belongs to site author unless
        stated.
          <small className="site-footer__credit">
            Credits: Torii gate icon by{" "}
            <a href="https://www.iconfinder.com/Ruslancorel" target={"_blank"} rel="noopener" rel="noreferrer">
              Rudez Studio
            </a>{" "}
            and Passport icon by{" "}
            <a href="https://www.iconfinder.com/perdanakun" target={"_blank"} rel="noopener" rel="noreferrer">
              Conania
            </a>
          </small>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
