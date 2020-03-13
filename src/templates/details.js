import React from "react"
import { Link } from "gatsby"
import { FiArrowLeft } from "react-icons/fi"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const section = data.markdownRemark

  return (
    <Layout>
      <SEO title="Home" />
      <Link to="/" className="flex w-8 hyperlink text-2xl pb-3">
        <FiArrowLeft />
      </Link>
      <hr />
      <div className="font-bold text-xl m-4">{section.frontmatter.title}</div>
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
