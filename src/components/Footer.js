import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" />
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/joshuamcguire"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="4" />
      </Row>
    </Container>
  );
}

export default Footer;
