import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const NewGameMenu = (props) => (
    <div>
         <Form>
             {/* New/Current */}
            <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary">New</button>
                <button type="button" className="btn btn-primary">Current</button>
            </div>
            <br></br>
            <br></br>

            {/* Board Size */}
            <Row>
                    <Col md="2"></Col>
                    <Col md="2">
                        <button onClick={props.inputChange} name="boardSize" type="button" className="btn btn-primary" value="3">4X4</button>
                    </Col>
                    <Col md="4"></Col>
                    <Col md="2">
                    <button onClick={props.inputChange} name="boardSize" type="button" className="btn btn-primary" value="2">5X5</button>
                    </Col>
                    <Col md="2"></Col>
            </Row>

            <br></br>

            {/* Single/Multiplayer */}
            <Row>
                <Col md="2"></Col>
                <Col md="2">
                <div className="form-check form-check-inline ">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked></input>
                    <label className="form-check-label" htmlFor="exampleRadios1">
                        Practice
                    </label>
                </div>
                </Col>
                <Col md="4"></Col>
                <Col md="2">
                <div className="form-check form-check-inline ">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                    <label className="form-check-label" htmlFor="exampleRadios2">
                        Opponent
                    </label>
                </div>
                </Col>
            </Row>

            <Row>
                <Col md="8"></Col>
                <Col md="2">

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked></input>
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Random
                        </label>
                    </div>
                </Col>
                <Col md="2"></Col>
                <Col md="8"></Col>
                <Col md="2">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            Search
                        </label>
                    </div>
                </Col>
                <Col md="2"></Col>
            </Row>

            <br></br>
            <button name="gameStarted" onClick={props.startGame} className="btn btn-primary" value="true">Start</button>
        </Form>
    </div>
);

export default NewGameMenu;