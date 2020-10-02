import React from "react";
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'


var height = {
    height: "10vh"
};

export const Die = (props) => (
    <Col md={props.colSize} className={props.key}>
        <Button variant="secondary" style={height}>
            {props.value}
        </Button>
    </Col>
);

export default Die;