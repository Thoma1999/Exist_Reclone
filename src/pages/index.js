import React from "react"
import { Container, Row, Col } from 'reactstrap';
import Layout from "../components/layout"
import SEO from "../components/seo"
import car from '../images/evo.jpg';
import bruno from '../images/bruno.jpg';
import cliff from '../images/cliff.jpg';
import './home.scss';


const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Row>
        <Col md={9}>
          <Row>
            <img src={car}></img>
          </Row>
        </Col>
        <Col md={3}>
          <Row>
            <img src={bruno}></img>
          </Row>
          <Row>
            <img src={cliff}></img>
          </Row>
          <Row>
            <img src={car}></img>
          </Row>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
