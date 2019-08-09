import React from 'react'
import { compose } from 'redux';
import PropTypes from 'prop-types';
import Board from './Board'
import '../App.css'
import { SquaresDeepCopy ,  addChessToLists, setChessToSquares} from "../../functions/gamebasics";
import { calculationArrays } from "../../functions/catchgame";

export class OthelloGame extends React.Component {
	constructor(props) {
		super(props);
		this.state =  {
			history: [{
				squares : Array(8).fill(Array(8).fill({value:"", owner:"", lock: false})), // construct 3* 3 squares 
				player1chess:  0,
				player2chess:  0,
				nowplayer: "player1"
			}],
			gameinfo:{
				gamename: "Othello",
				gamestate: "Game Begin",
				player1: "Tom",
				player2: "Jerry",
				winner: "",
				loser:"",
				turns: 0,
				actionlists:[],
			},
		}
		this.change = this.change.bind(this)
		this.clear = this.clear.bind(this)
	}
  change = (rowskey, columnskey) => {
		const history = this.state.history.slice(0, this.state.gameinfo.turns + 1);
		const current = history[history.length - 1];
		const player = current.nowplayer
		const info = this.state.gameinfo
		let newsquares = SquaresDeepCopy(current.squares);
		// check broad is lock
    if (newsquares[rowskey][columnskey].lock === true || info.gamestate === "Game End")
			return
		// construct new chess
		const  newchess = {
			rowskey: rowskey,
      columnskey: columnskey,
      value: (player === "player1") ? "O" : "X",
			owner: player,
			lock: true,
		}
		// use compose function( from redux,js) to processing state, and get new state
		let processobject = compose(
			JudgeGame,
			organizeBoard,
			addNewChess,
	)({
		squares: newsquares,
		player1chess: current.player1chess,
		player2chess: current.player2chess,
		actionlists: info.actionlists.slice(),
		chess: newchess,
		gamestate: info.gamestate,
	})
		// set state
		let winner = ""
		let loser = ""
		if (processobject.gamestate === "Game End") {
			if (processobject.player1chess > processobject.player2chess) {
				winner = "player1"
				loser = "player2"
			}
			else if (processobject.player2chess > processobject.player1chess) {
				winner = "player2"
				loser = "player1"
			}
			else {
				winner = "No Winner"
				loser = "No Loser"
			}}
		this.setState({
			history: history.concat([
				{
					squares: processobject.squares,
					player1chess:  processobject.player1chess,
					player2chess:  processobject.player2chess,	
					nowplayer: (player === "player1") ? "player2" : "player1"
				}]),
			gameinfo: {
				...info,
				actionlists: processobject.actionlists,
				turns: info.turns + 1,
				gamestate: processobject.gamestate,
				winner: winner,
				loser: loser,
			},
		})
  }
  clear = () => {
		this.setState({
			history: [{
				squares : Array(8).fill(Array(8).fill({value:"", owner:"", lock: false})), // construct 3* 3 squares 
				player1chess:  0,
				player2chess:  0,
				nowplayer: "player1"
			}],
			gameinfo:{
				gamename: "Othello",
				gamestate: "Game Begin",
				player1: "Tom",
				player2: "Jerry",
				winner: "",
				loser:"",
				turns: 0,
				actionlists:[],
			},
		})}
	jumpto = (step) => {
		this.setState({
			history: this.state.history.slice(0,step + 1),
			gameinfo: {
				...this.state.gameinfo,
				turns: step,
				actionlists: this.state.gameinfo.actionlists.slice(0, step + 1),
				gamestate: "Game Playing"
			}}
		)
	}
  render() {
		const history = this.state.history
		const info = this.state.gameinfo
		const current = history[info.turns]
		const steps = history.map((_element,step) => {
			const libotton = step ?
			`Go to move # ${step}` :
			`Go to Start`
			return (
				<li key={step}>
				<input type="bottom" value={libotton} onClick={() => this.jumpto(step)} />
				</li>
			)
		})
		const showgamestate = (info,current) => {
			if (info.gamestate === "Game End") {
				if (info.winner !== "No Winner") {
					return `Winner is ${info[info.winner]}, Loser is ${info[info.loser]}`
				}
				else {
					return `The Ｇame ended in a tie.`
				}
			}
		else {
			return `${info[current.nowplayer]} ,  Please push your Chess`
		}
		}
		return (
			<div>
        <Board 
          Squares= {current.squares} 
          className='board' 
          change={(rowskey, columnkey) => {
            return (this.change(rowskey, columnkey));
          }}
        />
				<div className="game-info" >
					<p>{showgamestate(info,current)}</p>
					<ol>{steps}</ol>
        </div>
        <div className="game-bottons">
          <input type="button" value="New Game" onClick={this.clear} />
        </div>
			</div>
			)
		}
}

const addNewChess = (ProcessObject = {}) => {
	let chess = ProcessObject.chess
	ProcessObject.actionlists = addChessToLists(chess,ProcessObject.actionlists)
	ProcessObject.squares = setChessToSquares(chess,ProcessObject.squares)
	return ProcessObject
}
const organizeBoard = (ProcessObject = {}) => {
	let chess = ProcessObject.chess
	let squares = ProcessObject.squares
	let player = chess.owner
	//caculate the array to change chess	and flatten 2-dimension-array to 1-dimension-array
	const changeArrays = calculationArrays(chess, squares).reduce((accumulator,currentValue)=> accumulator.concat(currentValue),[])
	let changenumber = changeArrays.length
	//change chess by array
	if (changenumber > 0){
		ProcessObject.squares = changeArrays.reduce((presquares,nowchess) => setChessToSquares(nowchess,presquares),squares)
	}
	//re-caculate the number of player's chess
	if (player === "player1") {
		ProcessObject.player1chess += changenumber + 1
		ProcessObject.player2chess -= changenumber
	}
	else {
		ProcessObject.player1chess -= changenumber
		ProcessObject.player2chess += changenumber + 1
	}
	return ProcessObject
}
const JudgeGame = (ProcessObject = {}) => {
	let player1chess = ProcessObject.player1chess
	let player2chess = ProcessObject.player2chess
	if ( /*(player1chess === 0) || (player2chess === 0) || */(player1chess + player2chess >= 64) ) {
		ProcessObject.gamestate = "Game End"
	}
	else {
		ProcessObject.gamestate = "Game Playing"
	}
	return ProcessObject
}
// ========================================



OthelloGame.propTypes = {
  squares: PropTypes.array,
  list: PropTypes.array,
  info: PropTypes.object,
  addlist: PropTypes.func,
  dellist: PropTypes.func,
  addchess: PropTypes.func,
  changeplayer: PropTypes.func,
  endgame: PropTypes.func,
  begingame: PropTypes.func,
  beginboard: PropTypes.func,
  clearlist: PropTypes.func
}