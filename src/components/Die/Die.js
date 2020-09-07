import React from "react";
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'


var height = {
    // border: '2px solid black',
    height: "10vh"
};

export const Die = (props) => (
    // <Card border="dark" bg="secondary">
    //     <Card.Body>{props.value}</Card.Body>
    // </Card>
    <Col md={4}>
        <Button variant="secondary" style={height}>
            {props.value}
        </Button>
    </Col>
)

export default Die;