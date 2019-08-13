import React from 'react'
import PropTypes from 'prop-types';
import { GameLocalStore } from "./Gamelocalstore";
import { GameInFo } from "./Gameinfo";
import { GameMain } from "./GameMain";
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
		const { history, gameinfo: info} = this.state
//		const info = this.state.gameinfo
		const {players, gamerule} = this.props
		const current = history[info.turns]
			return (
				<section className="game" >
					<GameMain
						current={current}
						info= {info} 
						players={players} 
						gamerule={gamerule} 
						mainchange={(rowskey, columnskey) => this.mainchange(rowskey, columnskey)}
						/>
					<GameInFo 
						players={players} 
						history={history} 
						info={info} 
						adddata={()=>this.adddata(info.gamename,info.actionlists)} 
						jumpto={(step) => this.jumpto(step)}
					/>
					<GameLocalStore
						store={this.props.localstore}
						deldata={(id) => this.deldata(id)}
						loadingdata= {(gamedata) => this.loadingdata(gamedata)}
					/>
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