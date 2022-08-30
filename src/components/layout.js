/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"

import Header from "./header"
import Footer from "./footer"
import Contact from "./contact"
import "../styles/base.scss"

import "@fontsource/noto-sans-jp/400.css"
import "@fontsource/noto-sans-jp/500.css"
import "@fontsource/pacifico"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
        {children}
      <Contact/>
      <Footer/>
    </>
  )
}

export default Layout
