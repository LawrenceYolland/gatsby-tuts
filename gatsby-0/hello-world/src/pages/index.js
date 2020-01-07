import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"
export default () => {
  return (
    <div style={{ color: `purple` }}>
      <Header headerText="The home page" />
      <Link to="/about">About</Link>
      <Link to="/contact">contact</Link>
      <li>Hello World!</li>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
