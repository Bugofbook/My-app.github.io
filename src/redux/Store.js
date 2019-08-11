import { createStore, combineReducers, applyMiddleware } from 'redux';
import {playerData  } from "./reducers/PlayerDataReducers";
import { gameDatas } from "./reducers/GameDataReducer";

const initialDate ={
	gameDatas:[],
	playerData:{
		player1: "Tom1",
		player2: "Jerry1",
	},
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
		combineReducers({gameDatas, playerData}) ,
		(localStorage['redux-store']) ?
		JSON.parse(localStorage['redux-store']) :
		initialState
	)
)
