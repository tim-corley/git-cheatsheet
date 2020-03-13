import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const section = data.markdownRemark

  return (
    <Layout>
      <SEO title="Home" />
      <Link to="/">Go Back</Link>
      <hr />
      <h2>{section.frontmatter.title}</h2>
      <h4>Updated on: {section.frontmatter.date}</h4>
      <div dangerouslySetInnerHTML={{ __html: section.html }}></div>
    </Layout>
  )
}

export const sectionQuery = graphql`
  query SectionByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`
