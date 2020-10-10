import React from "react";
import Form from 'react-bootstrap/Form';


export const NewGameMenu = (props) => (
    <div>
         <Form>
            <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary">4X4</button>
                {/* <button type="button" class="btn btn-secondary">Middle</button> */}
                <button type="button" class="btn btn-primary">5X5</button>
            </div>
            <br></br>
            <div class="form-check form-check-inline ">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                <label className="form-check-label" for="exampleRadios1">
                    Practice
                </label>
            </div>
            <div className="form-check form-check-inline ">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                <label className="form-check-label" for="exampleRadios2">
                    Opponent
                </label>
            </div>
            <br></br>
            <button type="submit" className="btn btn-primary">Start</button>
        </Form>
    </div>
);

export default NewGameMenu;