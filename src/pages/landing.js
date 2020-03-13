// import React from "react"
// import { Link } from "gatsby"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import "./index.css"

// const LandingPage = ({ data }) => (
//   <Layout>
//     <SEO title="Landing" />

//     <p>Welcome. Here are some helpful Git notes...</p>
//     {data.allMarkdownRemark.edges.map(section => (
//       <div key={section.node.id}>
//         <h3>{section.node.frontmatter.title}</h3>
//         <small> Updated: {section.node.frontmatter.date}</small>
//         <br />
//         <br />
//         <Link to={section.node.frontmatter.path}>Read More</Link>
//         <br />
//         <br />
//       </div>
//     ))}
//   </Layout>
// )

// export const pageQuery = graphql`
//   query LandingQuery {
//     allMarkdownRemark {
//       edges {
//         node {
//           id
//           frontmatter {
//             path
//             date
//             title
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `

// export default LandingPage
