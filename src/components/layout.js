import * as React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar";
import { StaticImage } from "gatsby-plugin-image"

import "./layout.scss";
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
 

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header"> 
     
      <Navbar title={title}/></header>
      <main>{children}</main>
      <footer className="footerMain">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
