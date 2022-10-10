/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import "../styles/main.scss"
import { Helmet } from "react-helmet"
import ScrollToTop from "./ui/ScrollToTop"

const Layout = ({ children, title }) => {
  return (
    <section>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <title>{title}</title>
      </Helmet>
      <main>{children}</main>
      <ScrollToTop />
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
