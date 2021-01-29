import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';

var borderStyle = {
    borderWidth: "2px",
    borderRadius: "25px",
    height: "50vh"
};

function GameBoard(props) {
  // const [boardSize, setBoardSize] = useState("")

  return (
    <div>
          <br/>
        <Container>
          <Row>

              {/* Left side */}
              <Col md={2}>
                hello
              </Col>

              {/* Main Box */}
              <Col md={8}>
                <Card border="primary" style={borderStyle}>
                  {/* { (props.boardSize == 3) ? ( */}
                    <Card.Body>{props.children}</Card.Body>
                  {/* ):( */}
                    {/* <div>Hello</div> */}
                  {/* )} */}
                </Card>
              </Col>

              {/* Right side */}
              <Col md={2}>
                hello
              </Col>

          </Row>
        </Container>
    </div>
  )
};

export default GameBoard;