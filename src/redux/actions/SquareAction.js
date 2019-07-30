import { SEQUARE } from "../constants";

export const SetChess = (value, owner, lock, row, column ) => ({
	type: SEQUARE.SET_CHESS,
	row, column ,value, owner, lock
})

export const ChangeValue = (value, row, column ) => ({
	type: SEQUARE.CHANGE_VALUE,
	row, column ,value
})

export const ChangeOwner = (owner, row, column ) => ({
	type: SEQUARE.CHANGE_OWNER,
	row, column ,owner
})

export const ChangeLock = (lock, row, column ) => ({
	type: SEQUARE.CHANGE_VALUE,
	row, column ,lock
})

export const CreateSquares = (row, column) => ({
	type: SEQUARE.CREATE_SQUARES,
	row, column
})
