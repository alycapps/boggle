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
            ["g","e","w","n","e","h"],
            ["h","n","u","i","m","qu"],
            ["j","b","o","o","a","b"],
            ["f","p","s","a","f","k"],
            ["h","n","l","n","r","z"],
            ["l","r","e","i","d","x"],
            ["d","r","y","v","l","e"],
            ["i","u","n","e","s","e"],
            ["d","t","y","t","i","s"],
            ["t","m","i","o","c","u"],
            ["p","s","h","a","c","o"],
            ["r","e","t","w","v","h"],
            ["r","e","t","t","y","l"],
            ["t","w","o","o","a","t"],
            ["e","o","t","s","s","i"],
            ["g","n","e","e","a","a"],
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
