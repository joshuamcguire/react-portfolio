import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              let me <span className="purple"> introduce </span> myself...
            </h1>
            <p className="home-about-body">
              I'm a Brisbane-based bioinformatician and full stack developer with clients in the education, financical services, retail and food sectors.
              <br />
              <br />I am fluent in &nbsp;
              <i>
                <b className="purple">C#, Go, Python, HTML/JS/CSS, Kotlin, Dart, Visual Basic and many more,</b>
              </i>
              <br />
              <br />
              and have industry experience with &nbsp;
              <i>
                <b className="purple">
                  Laravel, Svelte, Netlify, DigitalOcean, Flutter to list a few.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
