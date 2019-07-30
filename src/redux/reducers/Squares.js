import { SEQUARE } from "../constants";

export const ColumnSquare = ( state = {} , action) => {
	switch (action.type) {
		case SEQUARE.SET_CHESS:
			return {
				value: action.value,
				owner: action.owner,
				lock: action.lock,
			}
		case SEQUARE.CHANGE_VALUE:
			return {
				...state,
				value: action.value,
			}
		case SEQUARE.CHANGE_OWNER:
			return {
				...state,
				owner: action.owner,
			}
		case SEQUARE.CHANGE_LOCK:
			return {
				...state,
				lock: action.lock,
			}
		default:
			return state
	}
}

export const RowSquare = ( state = [], action) => {
	switch (action.type) {
		case SEQUARE.SET_CHESS:
		case SEQUARE.CHANGE_VALUE:
		case SEQUARE.CHANGE_OWNER:
		case SEQUARE.CHANGE_LOCK:
			return state.map((square, index ) => {
				return (action.column === index ) ?
				ColumnSquare(square, action) :
				square
			})
		default:
			return state
	}
}

export const Squares = ( state = [], action) => {
	switch (action.type) {
		case SEQUARE.SET_CHESS:
		case SEQUARE.CHANGE_VALUE:
		case SEQUARE.CHANGE_OWNER:
		case SEQUARE.CHANGE_LOCK:
			return state.map((squares, index) => {
				return (action.row === index ) ?
				RowSquare(squares, action) :
				squares
			})
			case SEQUARE.CREATE_SQUARES:
				return Array(action.row).fill(Array(action.column).fill({value:"", owner:"", lock: false}))
		default:
			return state
	}
}