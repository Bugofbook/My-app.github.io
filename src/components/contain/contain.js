import {connect } from 'react-redux';
import { AddGameData, DelGameData } from "../../redux/actions/GameDataAction";
import { TioTeoTicForm } from "./TioTeoTic";
import { OthelloForm } from "./othello";


//Incoming store with special game-name
const mapStateToProps = gamename => state => ({
	localstore: (state.gameDatas.length !== 0) ?
	state.gameDatas.filter((gamedata) => gamedata.gamename === gamename) :
	[]
})

// coonect dispatch and method
const mapDispatchToProps = dispatch => ({
	deldata(id) {
		dispatch(DelGameData(id))
	},
	adddata(gamename,actionlists) {
		dispatch(AddGameData(gamename,actionlists))
	}
})

//HOC for connect Ui-component , game-name, state and dispatch
const HOCforconnect = (component, gamename) => {
	return connect(
		mapStateToProps(gamename),
		mapDispatchToProps
		)(component)
}

export const TioTeoTicGame = HOCforconnect(TioTeoTicForm, "TioTeoTic")
export const OthelloGame = HOCforconnect(OthelloForm,"Othello")
