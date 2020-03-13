/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaGithub } from "react-icons/fa"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <body className="bg-gray-200">
        <main className="min-h-screen m-auto lg:py-10 p-6 w-full lg:w-2/3">
          {children}
        </main>
        <footer className="text-center text-gray-500 text-xs m-2 pb-4">
          <a
            className="flex hyperlink m-auto text-2xl pb-1 w-4"
            href="https://www.github.com"
          >
            <FaGithub />
          </a>
          © {new Date().getFullYear()} TIM CORLEY
          <div>
            BUILT WITH
            {` `}
            <a
              className="hyperlink text-gray-700 font-bold"
              href="https://www.gatsbyjs.org"
            >
              GATSBY.JS
            </a>
          </div>
        </footer>
      </body>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
