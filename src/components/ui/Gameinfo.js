import React from 'react';

export const GameInFo = ({players={},history=[], info={}, adddata=f=>f ,jumpto=f=>f}) =>
<div className="game-info" >
	<h2>遊戲歷程{/*Game Step*/}</h2>
	<p>點擊按鍵，可以跳到特定的狀態。{/*there are all steps in the game , click bottom for  jumping to special state of Game*/}</p>
	<p>遊戲結束時，可以把記錄存在本機。{/*When game is end , you can save data to local*/}</p>
	<GameEndBottom gamestate={info.gamestate} adddata={() => adddata()}/>
	<GameStepShow history={history} players={players} list={info.actionlists} jumpto={(step) => jumpto(step)} />
</div>

const GameEndBottom = ({gamestate="Game Playing", adddata=f=>f}) =>
(gamestate === "Game End") ?
<input type="bottom" value="Save Result" onClick={() => adddata()} /> :
<p></p>

const GameStepShow = ({history=[], players={} , list=[],jumpto=f=>f}) =>
<ol>
{
	history.map((_element,step) => {
		const libotton = step ?
		`${players[list[step - 1].owner]} Push chess to ( ${list[step - 1].rowskey + 1},${list[step - 1].columnskey + 1} )` :
		`Go to Start`
		return (
			<li key={step}>
			<input type="bottom" value={libotton} onClick={() => jumpto(step)} readOnly/>
			</li>
			)
		})
}
</ol>