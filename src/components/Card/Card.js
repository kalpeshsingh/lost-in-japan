/** 3P dependency imports */
import React from "react"
import { Link } from "gatsby"

/** styles */
import "./Card.css"

const Card = ({ title, subtitle, image, link }) => {
  console.log("image", image)
  return (
    <Link to={link} className="card">
      <img alt="" className="card__image" src={image} />
      <h1 className="card__title">{title}</h1>
      <h4>{subtitle}</h4>
    </Link>
  )
}

export default Card
