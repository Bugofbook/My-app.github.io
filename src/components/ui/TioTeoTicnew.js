import React from 'react'
import { compose } from 'redux';
import PropTypes from 'prop-types';
import Board from './Board'
import { SquaresDeepCopy } from "../../functions/gamebasics";
import { TTTSJudge, addNewChess, removeOldChess,  } from '../../functions/connectgame'
import '../App.css'

export class App extends React.Component {
	constructor(props) {
		super(props);
		this.state =  {
			history: [{
				squares : Array(3).fill(Array(3).fill({value:"", owner:"", lock: false})), // construct 3* 3 squares 
				showlists : [],
				nowplayer: "player1"
			}],
			gameinfo:{
				gamename: "TioTeoTic",
				gamestate: "Game Begin",
				player1: "Tom",
				player2: "Jerry",
				winner: "",
				loser:"",
				turns: 0,
				actionlists:[],
			},
		}
		this.TTTchange = this.TTTchange.bind(this)
		this.clear = this.clear.bind(this)
	}
  TTTchange = (rowskey, columnskey) => {
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
			TTTSJudge,
			addNewChess,
			removeOldChess
	)({
		squares: newsquares,
		lists: current.showlists.slice(),
		actionlists: info.actionlists.slice(),
		chess: newchess,
		gamestate: info.gamestate,
	})
		// set state
		let winner = ""
		let loser = ""
	if (processobject.gamestate === "Game End") {
			winner = player
			loser = (player === "player1") ? "player2" : "player1"
		}
		this.setState({
			history: history.concat([
				{
					squares: processobject.squares,
					showlists: processobject.lists,
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
				squares : Array(3).fill(Array(3).fill({value:"", owner:"", lock: false})), // construct 3* 3 squares 
				showlists : [],
				nowplayer: "player1"
			}],
			gameinfo:{
				gamename: "TioTeoTic",
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
		return (
			<div>
        <Board 
          Squares= {current.squares} 
          className='board' 
          change={(rowskey, columnkey) => {
            return (this.TTTchange(rowskey, columnkey));
          }}
        />
        <div className="game-info" >
					{(info.gamestate === "Game End") ? <p>Winner is {info.winner}</p> : <p>NowPlayer is {current.nowplayer}</p> }
					<ol>{steps}</ol>
        </div>
        <div className="game-bottons">
          <input type="button" value="New Game" onClick={this.clear} />
        </div>
			</div>
			)
		}
}





// ========================================

App.propTypes = {
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