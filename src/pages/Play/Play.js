import React from 'react';
import GameBoard from "../../components/GameBoard"
import Die from "../../components/Die"


const Play = () => (
    <div>
        <h1>Play page</h1>
        <GameBoard>
            <Die value={"A"}>
            </Die>
        </GameBoard>
    </div>
);

export default Play;