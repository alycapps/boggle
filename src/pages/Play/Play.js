import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import GameBoard from "../../components/GameBoard";
import Die from "../../components/Die";


// const Play = () => (
class Play extends Component {
    state = {
        dice: [
            // ["a","b","c","d","e","f"],
            // ["g","h","i","j","k","l"],
            // ["m","n","o","p","q","r"],
            // ["s","t","u","v","w","x"],
            // ["y","z","a","b","c","d"],
            // ["e","f","g","h","i","j"],
            // ["k","l","m","n","o","p"],
            // ["q","r","s","t","u","v"],
            // ["w","x","y","z","a","b"],
            // ["c","d","e","f","g","h"],
            // ["i","j","k","l","m","n"],
            // ["o","p","q","r","s","t"],
            // ["u","v","w","x","y","z"],
            // ["a","b","c","d","e","f"],
            // ["g","h","i","j","k","l"]
        ]
    };

    componentDidMount() {
        this.randomizeDice()
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
            ["g","h","i","j","k","l"]
        ];
        let decidedArray = [];
        //below randomizes the letter chosen from each die
        allDie.forEach(die => {
            var letterIndex = Math.floor(Math.random()*6)
            decidedArray.push(die[letterIndex])
        });
        console.log("TODO in Play.js -- add in randomization of order of decidedArray");
        this.setState({ 
              dice: decidedArray
        });
    };

    render() {
        return (
            <div>
                <h1>Play page</h1>
                <GameBoard>
                {/* {this.state.dice.map( die => ( */}
                {this.state.dice.map( die => (
                    <Die value={die}>
                    </Die>
                ))}
                </GameBoard>
            </div>
        )
    }
};

// export default Play;
export default withRouter(Play);
