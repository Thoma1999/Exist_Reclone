import React from "react"
import Blogcard from "../components/Blogcard"
import Gallery from "../components/gallery"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Col, Row} from 'reactstrap';


const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <Gallery></Gallery>
    <Row>
    <Col md={8}>
      <Blogcard></Blogcard>
    </Col>
    <Col md={4}>
      Sidebar here
    </Col>
    </Row>
  </Layout>
)

export default IndexPage
