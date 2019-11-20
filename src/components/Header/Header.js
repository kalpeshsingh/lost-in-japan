/** 3P dependency imports */
import React from "react"
import { Link } from "gatsby"

/** Component dependencies */
import FilledLink from "./../FilledLink"

/** styles */
import "./Header.css"

const HEADER_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Kalpesh",
    href: "/about-kalpesh/",
  },
  {
    label: "Resources",
    href: "/resources/",
  },
]

const getLinks = () => {
  return HEADER_LINKS.map(item => {
    if (
      typeof window !== "undefined" &&
      window.location.pathname === item.href
    ) {
      return (
        <span
          className="header__navbar__link header__navbar__link--active"
          key={item.href}
        >
          {item.label}
        </span>
      )
    } else {
      return (
        <Link className="header__navbar__link" key={item.href} to={item.href}>
          {item.label}
        </Link>
      )
    }
  })
}

const Header = () => (
  <header className="header">
    <h1 className="header__title">Lost In Japan</h1>
    <h1 className="header__subtitle" lang="ja">
      ロストインジャパン
    </h1>
    <nav className="header__navbar">
      <div className="header__navbar__left">{getLinks()}</div>
      <div className="header__navbar__right">
        <FilledLink link={"https://www.buymeacoffee.com/kalpeshsingh"}>
          Buy me a coffee ☕
        </FilledLink>
      </div>
    </nav>
  </header>
)

export default Header
