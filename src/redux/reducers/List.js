import { LIST } from "../constants"

export const List = ( state = {}, action ) => {
	switch (action.type) {
		case LIST.ADD_LIST :
			return {
				row: action.row,
				column: action.column,
				value: action.value,
				owner: action.owner,
			}
			default :
			return state
	}
}

export const Lists = ( state = [], action ) => {
	switch (action.type) {
		case LIST.ADD_LIST:
			return [
				...state,
				List({}, action)
			]
			case LIST.DEL_LIST:
				return state.filter( ( _point , index ) => index !== action.order )
			case LIST.CLEAR_LIST:
				return []
			default :
				return state
		}
	}

		/*
		ex:

		action = {
			row: 1,
			column: 1,
			value: "X"
			owner: "player1"
			order: 2,
		}


		*/