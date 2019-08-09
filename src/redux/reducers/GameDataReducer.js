import { GAMEDATA } from "../constants";

export const gameData = (state = [], action) => {
	switch (action.type) {
		case GAMEDATA.ADD_GAMEDATA:
			return [{
				id: action.id,
				gamename: action.gamename,
				date: action.date,
				chesshistory: action.chesshistory,
			}]
		default:
			return state
	}
}

export const gameDatas = (state = [] , action) => {
	switch (action.type) {
		case GAMEDATA.ADD_GAMEDATA:
			return state.concat(gameData([],action))
		case GAMEDATA.DEL_GAMEDATA:
			return state.filter((data) => data.id !== action.id)
		default:
			return state
	}
}