/** 3P dependency imports */
import React, { Component } from "react"
import PropTypes from "prop-types"

/** styles **/
import "./FooterBreadcrumb.css"

class FooterBreadcrumb extends Component {
  render() {
    const { left, right } = this.props

    return (
      <div className="footer-breadcrumb">
        <a href={left.link}>
          <div className="footer-breadcrumb__left-subtitle">← Go back to</div>
          <div>{left.label} </div>
        </a>
        {right && (
          <a href={right.link}>
            <div className="footer-breadcrumb__right-subtitle">Read next →</div>
            <div>{right.label}</div>
          </a>
        )}
      </div>
    )
  }
}

FooterBreadcrumb.defaultProps = {}

FooterBreadcrumb.propTypes = {
  left: PropTypes.object,
  right: PropTypes.object,
}

export default FooterBreadcrumb
