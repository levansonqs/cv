import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectItem from "../components/ProjectItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Project" />
    <ProjectItem />
  </Layout>
)

export default IndexPage
