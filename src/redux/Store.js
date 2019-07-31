import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Squares } from "./reducers/Squares";
import { Lists } from "./reducers/List";
import { Info } from "./reducers/Info";
import { RowStyle, ColumnStyle } from "./reducers/squarestyle";

const initialDate ={
	Squares:[],
	List:[],
	Info:{},
	rowstyle:[],
	columnstyle:[]
}

const logger = store => next => action => {
	let result
	//console.groupCollapsed("dispatching", action.type)
	//console.log('prev state' , store.getState())
	//console.log('action', action)
	result = next(action)
	//console.log('next state', store.getState())
	//console.groupEnd()
	return result
}

const saver = store => next => action => {
	let result = next(action)
	localStorage['redux-store'] = JSON.stringify(store.getState())
	return result
}

export const storeFactory = (initialState = initialDate ) =>(
	applyMiddleware(logger, saver)(createStore)(
		combineReducers({Squares, Lists, Info, RowStyle, ColumnStyle}) ,
		(localStorage['redux-store']) ?
		JSON.parse(localStorage['redux-store']) :
		initialState
	)
)
