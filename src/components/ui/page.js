import React from 'react'
import PropTypes from 'prop-types';
import Board from './Board'
import '../App.css'


export 	class  GamePage extends React.Component {
	constructor(props) {
		super(props);
		this.state =  this.props.initialstate
		this.mainchange = this.mainchange.bind(this)
	}
	mainchange = () => {
		// Need compoent to make 
		console.log("Sorry, you did not make the method")
	}
	jumpto = (step) => {
		if (step === 0) {
			this.setState(this.props.initialstate)
		}
		this.setState({
			history: this.state.history.slice(0,step + 1),
			gameinfo: {
				...this.state.gameinfo,
				turns: step,
				actionlists: this.state.gameinfo.actionlists.slice(0, step),
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
			`${info[info.actionlists[step - 1].owner]} Push chess to ( ${info.actionlists[step - 1].rowskey + 1},${info.actionlists[step - 1].columnskey + 1} )` :
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
				change={(rowskey, columnskey) => this.mainchange(rowskey, columnskey)}
				/>
				<div className="game-info" >
				<p>{showgamestate(info,current)}</p>
				<ol>{steps}</ol>
				</div>
				<div className="game-bottons">
				</div>
				</div>
				)
			}
		}
		
// ========================================



GamePage.propTypes = {
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