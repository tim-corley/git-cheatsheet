import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import gitLogo from "../images/Git-Icon-Black-120px.png"
import gitHubLogo from "../images/GitHub-Icon-Black-120px.png"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Landing" />
    <h2 className="text-gray-700">
      <a href="https://git-scm.com/">Git</a> is a free and open source
      distributed version control system.
    </h2>
    <h2 className="text-gray-700">
      <a href="https://github.com/about">Github</a> is a hosting platform that
      enables developer collaboration and code sharing.
    </h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={gitLogo} alt="Git Logo" />
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={gitHubLogo} alt="GitHub Logo" />
    </div>
  </Layout>
)

export default IndexPage
