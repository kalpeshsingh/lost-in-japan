/** 3P dependency imports */
import React from "react"
import { Link } from "gatsby"

/** Component dependencies */
import FilledLink from "./../FilledLink"

/** styles */
import "./Header.css"

const Header = () => (
  <header className="header">
    <h1 className="header__title">Lost In Japan</h1>
    <nav className="header__navbar">
      <div className="header__navbar__left">
        <Link to="/">Home</Link>
        <Link to="/About">About Kalpesh</Link>
        <Link to="/Resources">Resources</Link>
      </div>
      <div className="header__navbar__right">
        <FilledLink>Buy me a coffee ☕</FilledLink>
      </div>
    </nav>
  </header>
)

export default Header
