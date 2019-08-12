
export const calculationArrays = (chess ={}, squares = []) => {
	let resultArray = []
	let targetvalue = chess.value
	let lengthx = squares.length
	for (let i = 0 ; i < 9 ; i++) {
		let vec = [Math.floor( i / 3) - 1 ,(i % 3) - 1]
		resultArray[i] = []
		if (vec === [0,0]) {
			continue
		}
		//resultArray.concat(checkLine(vec)(1,1)(chess,squares))
		for (let j = 1, jth = lengthx ; j < jth ; j ++) {
			let tapointx = chess.rowskey + vec[0] * j
			let tapointy = chess.columnskey + vec[1] * j
			let tavalue = ""
			if ( tapointx >= 0 && tapointx < lengthx && tapointy >= 0 && tapointy < squares[tapointx].length) {
				tavalue = squares[chess.rowskey + vec[0] * j][chess.columnskey + vec[1] * j].value
			}
			if (tavalue === "") {
				resultArray[i] = []
				break
			}
			else if (tavalue === targetvalue) {
				break
			}
			else if (tavalue !== targetvalue) {
				resultArray[i][j - 1] = {
					rowskey: chess.rowskey + vec[0] * j ,
					columnskey: chess.columnskey + vec[1] * j ,
					value: chess.value,
					owner: chess.owner,
					lock: chess.lock
				}
			}
		}
	}
	return resultArray
}
//call back array of chess which can catch 
export const checkLine = (Vector = []) => (maxlength = 1 , interval = 1) => (CurrentPoint , NowSquares) => {
	let newarray = takeLineChessFromSquares(Vector)(maxlength, interval)(CurrentPoint , NowSquares)
//	console.log(newarray)
	return checkCycleChessFromArray(newarray,CurrentPoint,[])
}
// take Array of chess from Square
const takeLineChessFromSquares = (Vector = []) => (maxlength = 1 , interval = 1) => (CurrentPoint , NowSquares) => {
	let resultarray = []
	let lengthx = NowSquares.length
	for (let i = 0 , ith = maxlength ; i < ith ; i++) {
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
	let checksquare = checkarray.shift()
	if (checksquare.value === startchess.value ) {  // find same chess , return result
		return resultarray
	}
	else if (checksquare.value === "" ) { //find empty chess , return empty result
		return []
	}
	else if (checksquare.value !==  startchess.value  ) { //No find same chess. continus find	
		return checkCycleChessFromArray(checkarray,startchess,resultarray.concat([checksquare]))
	}
}

