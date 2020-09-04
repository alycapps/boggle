import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

var borderStyle = {
    border: '2px solid black',
    borderRadius: "25px",
    height: "50vh"
  };


export const GameBoard = (props) => (
    <div>
         <br/>
        <Container>
          <Row>
              <Col md={3}>
                hello
              </Col>
              <Col md={6} style={borderStyle}>
                {props.children}
              </Col>
              <Col md={3}>
                hello
              </Col>
          </Row>
        </Container>
    </div>
)

export default GameBoard;