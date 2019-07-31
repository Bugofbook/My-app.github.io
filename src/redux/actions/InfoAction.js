import { INFO } from "../constants";

export const ChangeGamestate = gamestate => ({
	type: INFO.CHANGE_GAMESTATE,
	gamestate,
})

export const ChangePlayer = player => ({
	type: INFO.CHANGE_PLAYER,
	player,
})

export const SetEndstate = (winner, loser) => ({
	type: INFO.SET_ENDSTATE,
	winner, loser,
})

export const SetBeginstate = player => ({
	type: INFO.SET_BEGINSTATE,
	player,
})