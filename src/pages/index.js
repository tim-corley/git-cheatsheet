import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.allMarkdownRemark.edges.map(section => (
      <div
        className="max-w-sm mb-10 p-4 rounded overflow-hidden shadow-lg"
        key={section.node.id}
      >
        <div className="font-bold text-xl">
          {section.node.frontmatter.title}
        </div>
        <div className="px-1 mb-3 text-sm text-gray-300">
          {" "}
          Updated: {section.node.frontmatter.date}
        </div>
        <Link to={section.node.frontmatter.path}>Details</Link>
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query SheetsQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___path] }) {
      edges {
        node {
          id
          frontmatter {
            path
            date
            title
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
