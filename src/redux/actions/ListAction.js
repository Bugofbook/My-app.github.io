import { LIST } from "../constants";

export const AddList = (owner, value, row,column) => ({
	type: LIST.ADD_LIST,
	owner, value, row, column
}) 

export const DelList = (order) => ({
	type: LIST.DEL_LIST,
	order,
})

export const ClearList = () => ({
	type: LIST.CLEAR_LIST,
})