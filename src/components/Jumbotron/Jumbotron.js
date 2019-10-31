/** 3P dependency imports */
import React from "react"

/** styles */
import "./Jumbotron.css"

const Jumbotron = ({ title, subtitle }) => (
  <div className="jumbotron">
    <h1 className="jumbotron__title">{title}</h1>
    <h4 className="jumbotron__subtitle">{subtitle}</h4>
  </div>
)

export default Jumbotron
