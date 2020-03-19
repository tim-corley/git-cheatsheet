import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { FiArrowLeft } from "react-icons/fi"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const section = data.markdownRemark
  let featuredImgFluid
  if (section.frontmatter.featuredImage != null) {
    featuredImgFluid = section.frontmatter.featuredImage.childImageSharp.fluid
  } else {
    featuredImgFluid = null
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Link to="/" className="flex w-8 hyperlink text-2xl pb-3">
        <FiArrowLeft />
      </Link>
      <hr />
      <div className="card-title font-bold text-2xl m-4">
        {section.frontmatter.title}
      </div>
      {featuredImgFluid != null && (
        <div className="w-full m-8">
          <Img fluid={featuredImgFluid} />
        </div>
      )}
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
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
