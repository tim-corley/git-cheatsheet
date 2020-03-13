import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import gitLogo from "../images/Git-Icon-Black-120px.png"
import gitHubLogo from "../images/GitHub-Icon-Black-120px.png"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="max-w-sm mb-10 p-4 bg-white rounded overflow-hidden shadow-lg">
      <div className="mb-2">
        <a href="https://git-scm.com/">
          <img src={gitLogo} alt="Git Logo" />
        </a>
      </div>
      <h2 className="text-black">
        <a href="https://git-scm.com/" className="hyperlink">
          Git
        </a>{" "}
        is a free and open source distributed version control system.
      </h2>
    </div>
    <div className="max-w-sm mb-10 p-4 bg-white rounded overflow-hidden shadow-lg">
      <div className="mb-2">
        <a href="https://github.com/about">
          <img src={gitHubLogo} alt="GitHub Logo" />
        </a>
      </div>
      <h2 className="text-black">
        <a href="https://github.com/about" className="hyperlink">
          Github
        </a>{" "}
        is a hosting platform that enables developer collaboration and code
        sharing.
      </h2>
    </div>
  </Layout>
)

export default AboutPage
