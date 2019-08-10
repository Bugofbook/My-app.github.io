import React from 'react'
import PropTypes from 'prop-types';
import Board from './Board'
import '../../stylesheets/page.css'


export 	class  GamePage extends React.Component {
	constructor(props) {
		super(props);
		this.state =  this.props.initialstate
		this.mainchange = this.mainchange.bind(this)
		this.loadingdata = this.loadingdata.bind(this)
		this.adddata = this.props.adddata
		this.deldata = this.props.deldata		
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
	// 
	loadingdata = (gamedata) => {
		window.setTimeout(( () => this.jumpto(0) ), 0)
		gamedata.chesshistory.reduce((_previousValue,action,index) => window.setTimeout(( () => this.mainchange(action.rowskey, action.columnskey) ), 1000 * index + 1000), 0)
	}
	render() {
		const history = this.state.history
		const info = this.state.gameinfo
		const current = history[info.turns]
		const localstore = this.props.localstore
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
			const showlocalstore = (store) =>{
				if (store.length === 0)
					return <p>No Local Save</p>
				return <ol>{store.map((gamedata,index) => 
					<li>
					<input type="bottom" value="X" style={{width: 15 }}  onClick={() => this.deldata(gamedata.id)} />
					<input type="bottom" value={`Time: ${gamedata.date.toLocaleString('zh-cn')} `} onClick={() => this.loadingdata(gamedata)} />
					</li>
				)}</ol>
			}
			const showsavebottom = (info) => {
				return (info.gamestate === "Game End") ?
				<input type="bottom" value="Save Result" onClick={() => this.adddata(info.gamename,info.actionlists)} /> :
				<p></p>
			}
			return (
				<section className="game" >
					<div className="game-board">
						<h1>{info.gamename}</h1>
						<h2>{showgamestate(info,current)}</h2>
						<Board 
							Squares= {current.squares} 
							className='board' 
							change={(rowskey, columnskey) => this.mainchange(rowskey, columnskey)}
						/>
				</div>
				<div className="game-info" >
					<h2>Game Step</h2>
					{showsavebottom(info)}
					<ol>{steps}</ol>
				</div>
				<div className="game-localstore">
					<h2>Local Save</h2>
					{showlocalstore(localstore)}
					</div>
				</section>
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