import React from "react"
import Gallery from "../components/gallery"
import Layout from "../components/layout"
import SEO from "../components/seo"



const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <Gallery></Gallery>
    
  </Layout>
)

export default IndexPage
