import { STYLE } from "../constants";

export const SquareStyle = (state = [], action ) => {
	switch (action.type) {
		case STYLE.SET_STYLE:
			return state.map((square, index) => {
				return (action.column === index) ?
				action.style :
				square
			})	
		default:
			return state
	}
}

export const ColumnStyle = (state = [], action ) => {
	switch (action.type) {
		case STYLE.SET_STYLE:
			return state.map((square, index) => {
				return (action.row === index) ?
				SquareStyle(square, action) :
				square
			})
			case STYLE.CREATE_STYLE:
				return Array(action.row).fill(Array(action.column).fill(""))
		default:
			return state
	}
}

export const RowStyle =( state = [], action ) => {
	switch (action.type) {
		case STYLE.SET_STYLE:
			return state.map((square, index) => {
				return (action.row === index) ?
				action.style :
				square
			})
			case STYLE.CREATE_STYLE:
				return Array(action.row).fill("")
		default:
			return state
	}
}