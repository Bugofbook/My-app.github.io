import React from 'react';
import Board from './Board'


export const GameMain = ({current={}, info= {}, players={},gamerule,mainchange=f=>f}) =>
<div className="game-board">
	<h1>{info.gamename}</h1>
	<h2>{showgamestate(info,current,players)}</h2>
	<Board 
		Squares= {current.squares} 
		className='board' 
		change={(rowskey, columnskey) => mainchange(rowskey, columnskey)}
	/>
	<h2>本遊戲的說明</h2>
	<ol>{gamerule}</ol>
</div>

const showgamestate = (info,current,players) =>{
	if (info.gamestate === "Game End") {
	if (info.winner !== "No Winner") {
		return `Winner is ${players[info.winner]}, Loser is ${players[info.loser]}`
	}
	else {
		return `The Ｇame ended in a tie.`
	}
}
else {
	return `${players[current.nowplayer]} ,  Please push your Chess`
}}
