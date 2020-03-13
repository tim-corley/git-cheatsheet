import React from "react"
import { Link } from "gatsby"

export default function Template({ data }) {
  const section = data.markdownRemark

  return (
    <div>
      <Link to="/landing">Go Back</Link>
      <hr />
      <h2>{section.frontmatter.title}</h2>
      <h4>Updated on: {section.frontmatter.date}</h4>
      <div dangerouslySetInnerHTML={{ __html: section.html }}></div>
    </div>
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
