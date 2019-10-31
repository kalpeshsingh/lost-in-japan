/** 3P dependency imports */
import React from "react"

/** Component dependencies */

/** styles */
import "./Card.css"

const Card = ({ title, subtitle, image, link }) => {
  console.log("image", image)
  return (
    <div className="card">
      <img className="card__image" src={image} />
      <h1 className="card__title">{title}</h1>
      <h4>{subtitle}</h4>
    </div>
  )
}

export default Card
