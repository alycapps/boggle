import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import GameBoard from "../../components/GameBoard";
import Die from "../../components/Die";


// const Play = () => (
class Play extends Component {
    state = {
        dice: {
            "1":["a","b","c","d","e","f"],
            "2":["a","b","c","d","e","f"],
            "3":["a","b","c","d","e","f"],
            "4":["a","b","c","d","e","f"],
            "5":["a","b","c","d","e","f"],
            "6":["a","b","c","d","e","f"],
            "7":["a","b","c","d","e","f"],
            "8":["a","b","c","d","e","f"],
            "9":["a","b","c","d","e","f"],
            "11":["a","b","c","d","e","f"],
            "12":["a","b","c","d","e","f"],
            "13":["a","b","c","d","e","f"],
            "14":["a","b","c","d","e","f"],
            "15":["a","b","c","d","e","f"],
            "16":["a","b","c","d","e","f"],
        }
    };
    componentDidMount() {
        this.randomizeDice()
    };
    randomizeDice() {
        console.log("gonna add in logic to chose value for each die")
    };

    render() {
        return (
            <div>
                <h1>Play page</h1>
                <GameBoard>
                    <Die value={"A"}>
                    </Die>
                </GameBoard>
            </div>
        )
    }
};

// export default Play;
export default withRouter(Play);
