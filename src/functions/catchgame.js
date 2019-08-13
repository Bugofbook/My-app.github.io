
export const calculationArrays = (chess ={}, squares = []) => 
Array(9).fill(1).map((_k,i) => [Math.floor( i / 3) - 1 ,(i % 3) - 1]).map( vec => checkLine(vec)(8,1)(chess,squares))

//call back array of chess which can catch 
 const checkLine  = (vec = []) => (maxlength = 1 , interval = 1) => (chess , squares) => {
	let kkkk = takeLineChessFromSquares(vec)(maxlength, interval)(chess , squares)
	return checkCycleChessFromArray(kkkk,chess,[])
}

// take Array of chess from Square
const takeLineChessFromSquares = (Vector = []) => (maxlength = 1 , interval = 1) => (CurrentPoint , NowSquares) => {
	let resultarray = []
	let lengthx = NowSquares.length
	for (let i = 1 , ith = maxlength ; i < ith ; i++) {
		let chessx = CurrentPoint.rowskey + Vector[0] * i * interval
		let chessy = CurrentPoint.columnskey + Vector[1] * i * interval
		if ( chessx >= 0 && chessx < lengthx && chessy >= 0 && chessy < NowSquares[chessx].length) { //check chess exist
			let Nowsquare = NowSquares[chessx][chessy]
			let NewChess = Object.assign(Nowsquare,{rowskey: chessx , columnskey: chessy }) 
			resultarray.push(NewChess)
		}
		else {
			break
		}
	}
	return resultarray
}
//find result of catch-game from Array of chess
const checkCycleChessFromArray = (checkarray,startchess,resultarray = []) => {
	if ( checkarray.length === 0) {  // No square need check , return empty result
		return []
	}
	let [oldchess, ...otherchess] = checkarray
	if (oldchess.value === startchess.value ) {  // find same chess , return result
		return resultarray
	}
	else if (oldchess.value === "" ) { //find empty chess , return empty result
		return []
	}
	else if (oldchess.value !==  startchess.value  ) { //No find same chess. continus find
		return checkCycleChessFromArray(otherchess,startchess,resultarray.concat({...startchess, rowskey: oldchess.rowskey, columnskey: oldchess.columnskey}))
	}
}

