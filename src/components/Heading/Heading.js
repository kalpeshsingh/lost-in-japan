/** 3P dependency imports */
import React from "react"
import PropTypes from "prop-types"

/** styles **/
import "./Heading.css"

class Heading extends React.Component {
  render() {
    const { level, id, className, spacing, children } = this.props
    const Element = `h${level}`
    const hasSpacing = spacing ? "heading" : ""
    return (
      <Element id={id} className={`${className} ${hasSpacing}`}>
        {children}
      </Element>
    )
  }
}

Heading.defaultProps = {
  level: 3,
  spacing: true,
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  fontWeight: PropTypes.number,
  className: PropTypes.string,
  id: PropTypes.string,
  spacing: PropTypes.bool,
}

export default Heading
