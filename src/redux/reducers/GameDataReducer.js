import { GAMEDATA } from "../constants";

export const GameData = (state = [], action) => {
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

export const GameDatas = (state = [] , action) => {
	switch (action.type) {
		case GAMEDATA.ADD_GAMEDATA:
			return state.concat(GameData([],action))
		case GAMEDATA.DEL_GAMEDATA:
			return state.filter((data) => data.id !== action.id)
		default:
			return state
	}
}