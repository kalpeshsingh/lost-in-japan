/** 3P dependency imports */
import React from "react"

/** styles */
import "./FilledLink.css"

const FilledLink = ({ link, children }) => (
  <a href={link} className="filledButton" rel="noopener" rel="noreferrer">
    {children}
  </a>
)

export default FilledLink
