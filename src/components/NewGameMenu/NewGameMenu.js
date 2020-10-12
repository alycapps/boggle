import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export const NewGameMenu = (props) => (
    <div>
         <Form>
             {/* New/Current */}
            <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary">New</button>
                <button type="button" class="btn btn-primary">Current</button>
            </div>
            <br></br>
            <br></br>

            {/* Board Size */}
            <Row>
                    <Col md="2"></Col>
                    <Col md="2">
                        <button type="button" class="btn btn-primary">4X4</button>
                    </Col>
                    <Col md="4"></Col>
                    <Col md="2">
                    <button type="button" class="btn btn-primary">5X5</button>
                    </Col>
                    <Col md="2"></Col>
            </Row>

            <br></br>

            {/* Single/Multiplayer */}
            <Row>
                <Col md="2"></Col>
                <Col md="2">
                <div class="form-check form-check-inline ">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                    <label className="form-check-label" for="exampleRadios1">
                        Practice
                    </label>
                </div>
                </Col>
                <Col md="4"></Col>
                <Col md="2">
                <div className="form-check form-check-inline ">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                    <label className="form-check-label" for="exampleRadios2">
                        Opponent
                    </label>
                </div>
                </Col>
            </Row>

            <Row>
                <Col md="8"></Col>
                <Col md="2">

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                        <label className="form-check-label" for="exampleRadios1">
                            Random
                        </label>
                    </div>
                </Col>
                <Col md="2"></Col>
                <Col md="8"></Col>
                <Col md="2">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                        <label className="form-check-label" for="exampleRadios2">
                            Search
                        </label>
                    </div>
                </Col>
                <Col md="2"></Col>
            </Row>

            <br></br>
            <button type="submit" className="btn btn-primary">Start</button>
        </Form>
    </div>
);

export default NewGameMenu;