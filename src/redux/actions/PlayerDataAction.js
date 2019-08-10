import { PLAYERDATA } from "../constants";

export const ChangePlayerName = (player1,player2) => ({
	type: PLAYERDATA.RE_NAME,
	player1,
	player2,
})
