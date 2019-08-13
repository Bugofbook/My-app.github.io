import {connect } from 'react-redux';
import { AddGameData, DelGameData, LoadingGameDada } from "../../redux/actions/GameDataAction";
import { ChangePlayerName } from "../../redux/actions/PlayerDataAction";
import { TioTeoTicForm, TioTeoTicSpecialForm, GomokuForm } from "./TioTeoTic";
import { OthelloForm } from "./othello";
import { HomeForm } from "./home";


//Incoming store with special game-name
const mapStateToProps = gamename => state => ({
	localstore: (state.gameDatas.length !== 0) ?
	state.gameDatas.filter((gamedata) => gamedata.gamename === gamename) :
	[],
	players: state.playerData
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

export const TioTeoTicSpecialGame = HOCforconnect(TioTeoTicSpecialForm, "TioTeoTicSpecial")
export const TioTeoTicGame = HOCforconnect(TioTeoTicForm, "TioTeoTic")
export const GomokuGame = HOCforconnect(GomokuForm, "Gomoku")
export const OthelloGame = HOCforconnect(OthelloForm,"Othello")

export const HomePage = connect(
	state => ({
		playerdata: state.playerData
	}),
	dispatch => ({
		moveplayerdata(player1,player2) {
			dispatch(ChangePlayerName(player1,player2))
		},
		movegamedata(data) {
			dispatch(LoadingGameDada(data))
		}
	})
	)(HomeForm)
