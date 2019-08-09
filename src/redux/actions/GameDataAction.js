import { GAMEDATA } from "../constants";

export const AddGameData = (id,gamename,date,chesshistory) => ({
	type: GAMEDATA.ADD_GAMEDATA,
	id,
	gamename,
	date,
	chesshistory,
})

export const DelGameData = (id) => ({
	type: GAMEDATA.DEL_GAMEDATA,
	id,
})