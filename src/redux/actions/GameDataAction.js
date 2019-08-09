import { GAMEDATA } from "../constants";
import { v4 } from 'uuid';

export const AddGameData = (gamename,chesshistory) => ({
	type: GAMEDATA.ADD_GAMEDATA,
	id: v4(),
	gamename,
	date: new Date(),
	chesshistory,
})

export const DelGameData = (id) => ({
	type: GAMEDATA.DEL_GAMEDATA,
	id,
})