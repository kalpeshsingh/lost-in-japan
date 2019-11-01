/** 3P dependency imports */
import React from "react"

/** styles */
import "./AlertBox.css"

export const ALERT_TYPES = {
  WARN: "warning",
}

const AlertBox = ({ children, type }) => {
  return <div className={`alert alert--${type}`}>{children}</div>
}

export default AlertBox
