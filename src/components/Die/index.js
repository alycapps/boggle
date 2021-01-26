import React from "react";
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

var height = {
    height: "10vh"
};

const Die = (props) => (
    <Col md={props.colSize} >
        <Button value={props.value} variant="secondary" style={height} key={props.key}>
            {props.value}
        </Button>
    </Col>
);

export default Die;