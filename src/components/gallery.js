import React from "react"
import { Container, Row, Col } from 'reactstrap';
import car from '../images/evo.jpg';
import bruno from '../images/bruno.jpg';
import cliff from '../images/cliff.jpg';
import '../styles/gallery.scss';

const Gallery = () => {
  return (
    <Container>
    <Row id="galleryMainR">
      <Col md={8}>
        <Row className="largeHeadlineR">
          <img src={car}></img>
          <div className="headlineDetails">
            <h3>Herd immunity or lockdown? Was the UK government caught in two minds?</h3>
            <span className="tag">Technology</span>
          </div>
        </Row>
      </Col>
      <Col md={4}>
        <Row className="smallHeadlineR">
          <img src={bruno}></img>
          <div className="headlineDetails">
            <h3>Herd immunity or lockdown? Was the UK government caught in two minds?</h3>
            <span className="tag">Technology</span>
          </div>
        </Row>
        <Row className="smallHeadlineR">
          <img src={cliff}></img>
          <div className="headlineDetails">
            <h3>Herd immunity or lockdown? Was the UK government caught in two minds?</h3>
            <span className="tag">Technology</span>
          </div>
        </Row>
      </Col>
    </Row>
  </Container>

  );
}



export default Gallery