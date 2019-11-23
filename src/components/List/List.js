/** 3P dependency imports */
import React, { Component } from "react"
import PropTypes from "prop-types"

/** styles **/
import "./List.css"

class List extends Component {
  render() {
    const { list, heading = "Things to consider -" } = this.props
    return (
      <div className="list">
        <h4 className="list__heading">{heading} </h4>
        <ul className="list__items">
          {list.map((item, idx) => {
            return <li key={idx}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}

List.defaultProps = {
  list: [],
}

List.propTypes = {
  list: PropTypes.array,
  heading: PropTypes.string,
}

export default List
