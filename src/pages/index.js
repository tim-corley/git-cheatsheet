import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FiArrowRight } from "react-icons/fi"
import "./index.css"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.allMarkdownRemark.edges.map(section => (
      <div
        className="relative max-w-sm mb-10 p-4 bg-white rounded overflow-hidden shadow-lg"
        key={section.node.id}
      >
        <Link
          to={section.node.frontmatter.path}
          className="card-title font-bold text-2xl"
        >
          {section.node.frontmatter.title}
        </Link>
        <div className="font-mono px-1 mb-3 text-xs text-gray-300">
          {" "}
          Updated: {section.node.frontmatter.date}
        </div>
        <Link
          className="hyperlink text-2xl absolute inset-y-0 right-0 p-2 mt-12"
          to={section.node.frontmatter.path}
        >
          <FiArrowRight />
        </Link>
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
