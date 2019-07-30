import { INFO } from "../constants";

export const Info = (state ={}, action ) => {
	switch (action.type) {
		case INFO.CHANGE_GAMESTATE:
			return {
				...state,
				gamestate: action.gamestate,
			}
		case INFO.CHANGE_PLAYER:
			return {
				...state,
				player: action.player,
			}
		case INFO.SET_ENDSTATE:
			return {
				...state,
				gamestate: "Game End",
				winner: action.winner,
				loser: action.loser,
			}
			case INFO.SET_BEGINSTATE:
				return {
					...state,
					gamestate: "Game Begin",
					player: action.player,
					winner: "",
					loser: "",
				}
		default:
			return state
	}
}