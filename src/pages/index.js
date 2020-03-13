import React from "react"
import Menu from "../components/menu"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Landing" />
    <Menu />
    <h2 className="text-gray-700">
      <a href="https://git-scm.com/">Git</a> is a free and open source
      distributed version control system.
    </h2>
    <h2 className="text-gray-700">
      <a href="https://github.com/about">Github</a> is a hosting platform that
      enables developer collaboration and code sharing.
    </h2>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
