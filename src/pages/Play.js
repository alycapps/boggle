import React, { useEffect, useState } from "react";
// import { withRouter } from 'react-router-dom';
import GameBoard from "../components/GameBoard.js";
import NewGameMenu from "../components/NewGameMenu.js"
import Die from "../components/Die.js";
import Row from 'react-bootstrap/Row'

const Play = () => {
    const [dice, setDice] = useState([])
    const [boardSize, setBoardSize] = useState(3)
    const [gameStarted, setGameStarted] = useState(false)
    // const [formObject, setFormObject] = useState({})


    useEffect(() => {
        randomizeDice(3)
        //TODO: need to set boardSize equal to value from form later
        // setBoardSize(3);
        console.log(boardSize, "boardSize");
    }, []);

    // This will chose the 16 or 25 set of die and then randomize the order of the array and then randomly chose a letter from each die which will be set to this.state.dice
    function randomizeDice(size) {
        let dice=[]
        if (size === 3) {
            //small 16 dice array
            dice = [
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
                ["g","n","e","e","a","a"]
            ];
        }
        else if (size === 2) {
            //large 25 dice array
            dice = [
                ["A","a","a","f","r","s"],
                ["a","a","e","e","e","e"],
                ["a","a","f","i","r","s"],
                ["a","d","e","n","n","n"],
                ["a","e","e","e","e","m"],
                ["a","e","e","g","m","u"],
                ["a","e","g","m","n","n"],
                ["a","f","i","r","s","y"],
                ["b","j","k","qu","x","z"],
                ["c","c","e","n","s","t"],
                ["c","e","i","i","l","t"],
                ["c","e","i","l","p","t"],
                ["c","e","i","p","s","t"],
                ["d","d","h","n","o","t"],
                ["d","h","h","l","o","r"],
                ["d","h","l","n","o","r"],
                ["d","h","l","n","o","r"],
                ["e","i","i","i","t","t"],
                ["e","m","o","t","t","t"],
                ["e","n","s","s","s","u"],
                ["f","i","p","r","s","y"],
                ["g","o","r","r","v","w"],
                ["i","p","r","r","r","y"],
                ["n","o","o","t","u","w"],
                ["o","o","o","t","t","u"]            
            ];
        }
        let decidedArray = [];
        //below randomizes the letter chosen from each die
        let index = 0;
        shuffle(dice);
        dice.forEach(die => {
            var letterIndex = Math.floor(Math.random()*6)
            var obj = {};
            obj["id"] = index;
            obj["value"] = die[letterIndex];
            decidedArray.push(obj);
            index ++;
        });
        console.log("TODO in Play.js -- add in randomization of order of decidedArray");
        setDice(decidedArray);
        console.log(decidedArray, "decidedArray");
    };

    //this will randomize the order of the items in an array
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
    };

    function startGame(event) {
        console.log(event, "event startGame")
        setGameStarted(true)
        console.log(gameStarted, "gameStarted")
    };

    const updateBoardSize = (event) => {
        event.preventDefault()
        const { value } = event.target;
        setBoardSize(value);
        randomizeDice(parseInt(value));
    };

    return(
        <div>
            <GameBoard>
                {gameStarted ? (
                        <Row>
                            {dice.map( die => (
                                <Die colSize={boardSize} key={die.id} value={die.value}>
                                </Die>
                            ))}
                        </Row>
                ) : (
                        <NewGameMenu startGame={startGame} updateBoardSize={updateBoardSize}>
                        </NewGameMenu>
                )}
            </GameBoard>
        </div>
    )
};

export default Play;