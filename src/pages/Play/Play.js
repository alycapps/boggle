import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import GameBoard from "../../components/GameBoard";
import Die from "../../components/Die";
import Row from 'react-bootstrap/Row'



// const Play = () => (
class Play extends Component {
    state = {
        dice: [],
        boardSize: ""
    };

    componentDidMount() {
        this.randomizeDice()
        //TODO: need to set boardSize equal to value from form later
        this.setState({ 
            boardSize: "3"
      }, console.log(this.state.boardSize, "boardSize"));
    };

    randomizeDice() {
        let allDie = [
            ["a","b","c","d","e","f"],
            ["g","h","i","j","k","l"],
            ["m","n","o","p","q","r"],
            ["s","t","u","v","w","x"],
            ["y","z","a","b","c","d"],
            ["e","f","g","h","i","j"],
            ["k","l","m","n","o","p"],
            ["q","r","s","t","u","v"],
            ["w","x","y","z","a","b"],
            ["c","d","e","f","g","h"],
            ["i","j","k","l","m","n"],
            ["o","p","q","r","s","t"],
            ["u","v","w","x","y","z"],
            ["a","b","c","d","e","f"],
            ["g","h","i","j","k","l"],
            ["m","n","o","p","q","r"],
        ];
        let decidedArray = [];
        //below randomizes the letter chosen from each die
        let index = 0;
        allDie.forEach(die => {
            var letterIndex = Math.floor(Math.random()*6)
            var obj = {};
            obj["id"] = index;
            obj["value"] = die[letterIndex];
            decidedArray.push(obj);
            index ++;
        });
        console.log("TODO in Play.js -- add in randomization of order of decidedArray");
        this.setState({ 
              dice: decidedArray
        }, console.log(decidedArray, "decidedArray"));
    };

    render() {
        return (
            <div>
                <h1>Play page</h1>
                <GameBoard>
                    <Row>
                        {this.state.dice.map( die => (
                            <Die colSize={this.state.boardSize} key={die.id} value={die.value}>
                            </Die>
                        ))}
                    </Row>
                </GameBoard>
            </div>
        )
    }
};

// export default Play;
export default withRouter(Play);
