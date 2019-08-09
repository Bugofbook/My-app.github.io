import { PLAYERDATA } from "../constants"

export const playerData = (state = {}, action) => {
	switch (action.type) {
		case PLAYERDATA.RE_NAME:
			return {
				...state,
				player1: action.player1,
				player2: action.player2,
			}
		default:
			return state
	}
}
